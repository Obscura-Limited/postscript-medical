const keyFindings = [{
        heading: 'Improved communication',
        percentage: 83,
        summary: 'Patitent communication was enhanced'
    },
    {
        percentage: 81,
        summary: 'My patients were more engaged'
    },
    {
        percentage: 89,
        summary: 'Explaining complex terminology was made easier'
    },
    {
        heading: 'Time well spent',
        percentage: 72,
        summary: 'Use of time during consultation was more efficient'
    },
    {
        percentage: 66,
        summary: 'Helped in patients with language barriers'
    },
    {
        percentage: 89,
        summary: 'Improved patient knowledge of their condition'
    },
    {
        percentage: 74,
        summary: 'Patients have a better understanding of their medications'
    },
    {
        percentage: 85,
        summary: 'Patients have a better understanding of surgery'
    },
    {
        percentage: 53,
        summary: 'Improves adherence to medications'
    },
    {
        heading: 'Unanimous positive feedback',
        percentage: 100,
        summary: 'Would use our illustrative Guide in routine practice'
    },
]

module.exports = {
    homePage: [
        keyFindings[0],
        keyFindings[1],
        keyFindings[2]
    ],
    researchPage1: [
        keyFindings[2],
        keyFindings[4],
        keyFindings[5],
    ],
    researchPage2: [
        keyFindings[6],
        keyFindings[7],
        keyFindings[8]
    ],
    cardContent1: keyFindings[9],
    cardContent2: keyFindings[0],
    cardContent3: keyFindings[3],
}