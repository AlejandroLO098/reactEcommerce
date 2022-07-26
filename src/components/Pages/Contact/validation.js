function validateInfo(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  //email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //phone
  if (!values.phone) {
    errors.phone = "Phone number required";
  } else if (/^[0-9\b]+$/.test(values.phone)) {
    errors.phone = "Please enter a number with dashes";
  }

  //comment
  if (!values.comment.trim()) {
    errors.comment = "comment required";
  }

  return errors;
}
export default validateInfo;
