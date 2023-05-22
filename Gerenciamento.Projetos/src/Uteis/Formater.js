const formatDate = (str) => {
    if (typeof str === "string") {
        let [y, m, d] = str.substring(0, 10).split("-");
        if (y === "0001")
            return "N/A";
        return `${d}/${m}/${y}`;

    } else {
        return ""
    }
}

const formatDateTime = (str) => {
    if (typeof str === "string") {
        return str.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}:[0-9]{2}:[0-9]{2})/, "$3/$2/$1 $4");
    } else {
        return ""
    }
}

export { formatDate, formatDateTime };