
export const getInitials = (title) => {
    if (!title) return "";
    const words = title.split(" ");
    let Initials  = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        if (words[i].length > 0) {
            Initials += words[i][0];
        }
    }
    return Initials.toUpperCase();
}

export const formatDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    return regex.test(email);
}
