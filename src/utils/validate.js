export const validateSignInForm = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  if (!password || password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return null;
};
export const validateSignUpForm = (name, email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || name.length < 2) {
    return "Name must be at least 2 characters long.";
  }
  if (!email || !emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  if (!password || password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return null;
};
