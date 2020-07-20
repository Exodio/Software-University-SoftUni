function solve(filePathInput) {

    let indexOfLastSlash = filePathInput.lastIndexOf("\\");
    let fileName = filePathInput.substring(indexOfLastSlash + 1);

    let indexOfExtension = fileName.lastIndexOf(".");
    let extensionType = fileName.substring(indexOfExtension + 1);

    let result = fileName.substring(0, fileName.lastIndexOf("."));


    console.log(`File name: ${result}`);
    console.log(`File extension: ${extensionType}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');