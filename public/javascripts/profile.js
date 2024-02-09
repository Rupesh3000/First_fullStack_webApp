function showSection(sectionId) {
    let sections = document.querySelectorAll('.info-container section');
    let options = document.querySelectorAll('.options-div .option');

    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });

    options.forEach(option => {
        option.classList.remove('active');
        if (option.id === sectionId) {
            option.classList.add('active');
        }
    });
}