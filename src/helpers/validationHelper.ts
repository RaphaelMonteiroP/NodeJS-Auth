export function validateStrength(
  password: string,
): "weak" | "medium" | "strong" {
  const lengthCheck = password.length;
  const upperCaseCheck = /[A-Z]/.test(password);
  const lowerCaseCheck = /[a-z]/.test(password);
  const numberCheck = /[0-9]/.test(password);
  const specialCharCheck = /[!@#$%^&*(),.]/.test(password);
  if (lengthCheck < 8) {
    return "weak";
  }
  const totalCheck =
    Number(upperCaseCheck) +
    Number(lowerCaseCheck) +
    Number(numberCheck) +
    Number(specialCharCheck);
  if (totalCheck < 2) {
    return "weak";
  } else if (totalCheck === 4) {
    return "strong";
  } else {
    return "medium";
  }
}
