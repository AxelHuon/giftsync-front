export const translationSigninErrorMessageApi = (errorCodeMessage: string) => {
    switch (errorCodeMessage) {
        case 'validation_failed':
            return 'Échec de la validation'
        case 'internal_server_error':
            return 'Erreur interne du serveur'
        case 'error_signIn_combination':
            return "Combinaison incorrecte d'adresse mail et de mot de passe"
        case 'email_and_password_required':
            return 'Adresse mail et mot de passe requis'
        default:
            return errorCodeMessage
    }
}

export const translationForgotPasswordErrorMessageApi = (
    errorCodeMessage: string
) => {
    switch (errorCodeMessage) {
        case 'validation_failed':
            return 'Échec de la validation'
        case 'email_is_required':
            return "L'adresse e-mail est requise"
        case 'no_user_found':
            return 'Aucun utilisateur trouvé avec cette adresse e-mail'
        case 'error_sending_email':
            return "Erreur lors de l'envoi de l'e-mail de réinitialisation"
        case 'internal_server_error':
            return 'Erreur interne du serveur'
        default:
            return errorCodeMessage
    }
}

export const translationResetPasswordErrorMessageApi = (
    errorCodeMessage: string
) => {
    switch (errorCodeMessage) {
        case 'validation_failed':
            return 'Échec de la validation'
        case 'password_required':
            return 'Le nouveau mot de passe est requis'
        case 'no_token_provided':
            return "Aucun jeton de réinitialisation n'a été fourni"
        case 'token_refresh_token':
            return 'Le jeton de réinitialisation a expiré. Veuillez faire une nouvelle demande de réinitialisation'
        case 'no_user_found':
            return 'Aucun utilisateur trouvé pour ce jeton de réinitialisation'
        case 'internal_server_error':
            return 'Erreur interne du serveur'
        default:
            return errorCodeMessage
    }
}

export const translationSignupErrorMessageApi = (errorCodeMessage: string) => {
    switch (errorCodeMessage) {
        case 'validation_failed':
            return 'Échec de la validation'
        case 'email_already_exists':
            return 'Cette adresse e-mail est déjà associée à un compte'
        case 'internal_server_error':
            return 'Erreur interne du serveur'
        default:
            return errorCodeMessage
    }
}

export const translationPatchUserInformationsErrorMessageApi = (
    errorCodeMessage: string
) => {
    switch (errorCodeMessage) {
        case 'validation_failed':
            return 'Échec de la validation'
        case 'unauthorized':
            return "Vous n'êtes pas autorisé à effectuer cette action"
        case 'user_not_found':
            return 'Utilisateur non trouvé'
        case 'internal_server_error':
            return 'Erreur interne du serveur'
        default:
            return errorCodeMessage
    }
}

export const translationPatchPasswordErrorMessageApi = (
    errorCodeMessage: string
) => {
    switch (errorCodeMessage) {
        case 'unauthorized':
            return "Vous n'êtes pas autorisé à effectuer cette action"
        case 'user_not_found':
            return 'Utilisateur non trouvé'
        case 'incorrect_old_password':
            return "L'ancien mot de passe est incorrect"
        case 'passwords_do_not_match':
            return 'Les nouveaux mots de passe ne correspondent pas'
        case 'internal_server_error':
            return 'Erreur interne du serveur'
        case 'password_updated':
            return 'Le mot de passe a été mis à jour avec succès'
        default:
            return errorCodeMessage
    }
}
