exports.getData = (req,res,next) => {
    res.status(200).json({
        professionalName: "Adam Garcia",
        primaryDescription: "student at BYU-Idaho",
        workDescription: "Front-end developer at Prepared Pantry",
        linkTitletext: "Here is some of Adam's work: " ,
        linkedInLink: "NA",
        githubLink: {
            link: "https://github.com/adgar152369",
            text: "Github"
        }
    });
}