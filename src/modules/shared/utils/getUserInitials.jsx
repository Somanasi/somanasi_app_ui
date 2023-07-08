export const getUserInitials = (user) => {
    const initials = user.firstName.charAt(0) + user.lastName.charAt(0);
    return initials.toUpperCase();
}