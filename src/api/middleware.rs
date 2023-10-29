use axum::http::Request;
use axum::middleware::Next;
use axum::response::{IntoResponse, Response};

use crate::model::result::{Error, Result};
use crate::model::user::{CurrentUser, Model as User};

pub async fn authorization<B>(mut request: Request<B>, next: Next<B>) -> Response {
    let authorization = request.headers().get("Authorization");

    if authorization.is_none() {
        return Error::AuthorizationMissing.into_response();
    }

    let open_id = authorization
        .unwrap()
        .to_str()
        .unwrap()
        .replace("Bearer ", "");

    let user: Result<User> = crate::service::user::detail(open_id.as_str()).await;

    if user.is_err() {
        return Error::AuthorizationNotFound.into_response();
    }

    request
        .extensions_mut()
        .insert(CurrentUser::from(user.unwrap()));

    next.run(request).await
}