const validateUserName = (username) => {
  if (username.length < 1) {
    return "Username must be between 1 and 14 characters";
  } else if (username.length > 14) {
    return "Username must be between 1 and 14 characters";
  }
  return null;
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = regex.test(email);
  if (!emailValid) {
    return "Please enter a valid email address in the format: example@domain.com.";
  } else {
    return null;
  }
};

const validatePassword = (password) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&^])[A-Za-z\d@$#!%*?&^]{8,}$/;
  const passwordValid = strongPasswordRegex.test(password);
  if (!passwordValid) {
    return "Your password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character such as @$!%*?&.";
  } else {
    return null;
  }
};

const passwordsMatch = (password, passwordConfirmation) => {
  if (password !== passwordConfirmation) {
    return "Passwords do not match";
  } else if (password === passwordConfirmation) {
    return null;
  }
};

export const processServerErrors = (unprocessedServerErrors) => {
  const serverErrors = {};
  unprocessedServerErrors.map((error) => {
    switch (error.path) {
      case "username":
        serverErrors.username = error.msg;
        break;
      case "email":
        serverErrors.email = error.msg;
        break;
      case "password":
        serverErrors.password = error.msg;
        break;
      case "passwordConfirmation":
        serverErrors.passwordConfirmation = error.msg;
    }
  });
  return serverErrors;
};

export const validateForm = (
  username,
  email,
  password,
  passwordConfirmation
) => {
  const clientErrors = {};

  const userNameError = validateUserName(username);
  if (userNameError) {
    clientErrors.username = userNameError;
  }

  const emailError = validateEmail(email);
  if (emailError) {
    clientErrors.email = emailError;
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    clientErrors.password = passwordError;
  }

  const passwordConfirmationError = validatePassword(passwordConfirmation);
  if (passwordConfirmationError) {
    clientErrors.passwordConfirmation = passwordError;
  }

  const passwordsMatchError = passwordsMatch(password, passwordConfirmation);
  if (
    !clientErrors.password &&
    !clientErrors.passwordConfirmation &&
    passwordsMatchError
  ) {
    clientErrors.passwordsMatch = passwordsMatchError;
  }

  return clientErrors;
};
