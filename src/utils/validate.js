export const checkValidateData = (email, Password) => {
  const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const ispasswordvalid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      Password
    )

  if (!isemailvalid) return "Email ID not valid "
  if (!ispasswordvalid) return "Passsword is not valid"
  //if (name === "") return "Name cannot be empty"

  return null
}
