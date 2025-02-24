let imgElement = document.getElementById('imageSrc');
let widthImage = document.getElementById('widthImage');
let heightImage = document.getElementById('heightImage');
let codeoutput = document.getElementById('codeoutput')
let canvas = document.getElementById('canvas');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

widthImage.addEventListener('input', () => {
    widthValue.textContent = widthImage.value;
});

heightImage.addEventListener('input', () => {
    heightValue.textContent = heightImage.value;
});

const pcDosPalette = {
    "00": [0, 0, 0],       // Preto
    "01": [0, 0, 170],     // Azul
    "02": [0, 170, 0],     // Verde
    "03": [0, 170, 170],     // Azul cobalto
    "04": [170, 0, 0],     // Vermelho
    "05": [170, 0, 170], // Violeta
    "06": [170, 85, 0], // Marrom*/
    "07": [170, 170, 170], // Cinza claro
    "08": [85, 85, 85], // Cinza escuro*/
    "09": [85, 85, 255], // Azul claro
    "0A": [85, 255, 85], // Verde claro
    "0B": [85, 255, 255], // Azul céu
    "0C": [255, 85, 85], // Red claro
    "0D": [255, 85, 255], // Violeta claro
    "0E": [255, 255, 85], // Amarelo*/
    "0F": [255, 255, 255], // Branco

    //Adicionais tons de cinza

    "10": [0, 0, 0], 
    "11": [16, 16, 16], 
    "12": [32, 32, 32], 
    "13": [53, 53, 53], 
    "14": [69, 69, 69], 
    "15": [85, 85, 85], 
    "16": [101, 101, 101],
    "17": [117, 117, 117], 
    "18": [138, 138, 138], 
    "19": [154, 154, 154], 
    "1A": [170, 170, 170], 
    "1B": [186, 186, 186],
    "1C": [202, 202, 202], 
    "1D": [223, 223, 223], 
    "1E": [239, 239, 239], 
    "1F": [255, 255, 255], //*/
    
    //Adicionais de tons
    "20": [0, 0, 255],
    "21": [65, 0, 255],
    "22": [130, 0, 255],
    "23": [190, 0, 255],
    "24": [255, 0, 255],
    "25": [255, 0, 190],
    "26": [255, 0, 130],
    "27": [255, 0, 60],
    "28": [255, 0, 0],
    "29": [255, 65, 0],
    "2A": [255, 130, 0],
    "2B": [255, 190, 0],
    "2C": [255, 255, 0],
    "2D": [190, 255, 0],
    "2E": [230, 255, 0],
    "2F": [65, 255, 0],
    "30": [0, 255, 0],
    "31": [0, 255, 65],
    "32": [0, 255, 130],
    "33": [0, 255, 190],
    "34": [0, 255, 255],
    "35": [0, 190, 255],
    "36": [0, 130, 255],
    "37": [0, 65, 255],
    "38": [130, 130, 255],
    "39": [158, 130, 255],
    "3A": [190, 130, 255],
    "3B": [223, 130, 255],
    "3C": [255, 130, 255],
    "3D": [255, 130, 223],
    "3E": [255, 130, 190],
    "3F": [255, 130, 158],
    "40": [255, 130, 130],
    "41": [255, 158, 130],
    "42": [255, 190, 130],
    "43": [255, 223, 130],
    "44": [255, 225, 130],
    "45": [253, 255, 130],
    "46": [190, 255, 130],
    "47": [158, 255, 130],
    "48": [130, 255, 130],
    "49": [130, 255, 158],
    "4A": [130, 255, 190],
    "4B": [130, 255, 223],
    "4C": [130, 255, 225],
    "4D": [130, 223, 225],
    "4E": [130, 190, 225],
    "4F": [130, 158, 225],
    "50": [186, 186, 255],
    "51": [202, 186, 255],
    "52": [223, 186, 255],
    "53": [239, 186, 255],
    "54": [255, 186, 255],
    "55": [255, 186, 239],
    "56": [255, 186, 223],
    "57": [255, 186, 202],
    "58": [255, 186, 186],
    "59": [255, 202, 186],
    "5A": [255, 223, 186],
    "5B": [255, 239, 186],
    "5C": [255, 255, 186],
    "5D": [239, 255, 186],
    "5E": [223, 255, 186],
    "5F": [202, 255, 186],
    "60": [186, 255, 186],
    "61": [186, 255, 202],
    "62": [186, 255, 223],
    "63": [186, 255, 239],
    "64": [186, 255, 255],
    "65": [186, 239, 255],
    "66": [186, 223, 255],
    "67": [186, 202, 255], //*/
    
    //Adicionais tons de cores escuras
    "68": [0, 0, 113],
    "69": [28, 0, 113],
    "6A": [57, 0, 113],
    "6B": [85, 0, 113],
    "6C": [113, 0, 113],
    "6D": [113, 0, 85],
    "6E": [113, 0, 57],
    "6F": [113, 0, 28],
    "70": [113, 0, 0],
    "71": [113, 28, 0],
    "72": [113, 57, 0],
    "73": [113, 85, 0],
    "74": [113, 113, 0],
    "75": [85, 113, 0],
    "76": [57, 113, 0],
    "77": [28, 113, 0],
    "78": [0, 113, 0],
    "79": [0, 113, 28],
    "7A": [0, 113, 57],
    "7B": [0, 113, 85],
    "7C": [0, 113, 113],
    "7D": [0, 85, 113],
    "7E": [0, 57, 113],
    "7F": [0, 28, 113],
    "80": [57, 57, 113],
    "81": [69, 57, 113],
    "82": [85, 57, 113],
    "83": [97, 57, 113],
    "84": [113, 57, 113],
    "85": [113, 57, 97],
    "86": [113, 57, 85],
    "87": [113, 57, 69],
    "88": [113, 57, 57],
    "89": [113, 69, 57],
    "8A": [113, 85, 57],
    "8B": [113, 97, 57],
    "8C": [113, 113, 57],
    "8D": [97, 113, 57],
    "8E": [85, 113, 57],
    "8F": [69, 113, 57],
    "90": [57, 113, 57],
    "91": [57, 113, 69],
    "92": [57, 113, 85],
    "93": [57, 113, 97],
    "94": [57, 113, 113],
    "95": [57, 97, 113],
    "96": [57, 85, 113],
    "97": [57, 69, 113],
    "98": [81, 81, 113],
    "99": [89, 81, 113],
    "9A": [97, 81, 113],
    "9B": [105, 81, 113],
    "9C": [113, 81, 113],
    "9D": [113, 81, 105],
    "9E": [113, 81, 97],
    "9F": [113, 81, 89],
    "A0": [113, 81, 81],
    "A1": [113, 89, 81],
    "A2": [113, 97, 81],
    "A3": [113, 105, 81],
    "A4": [113, 113, 81],
    "A5": [105, 113, 81],
    "A6": [97, 113, 81],
    "A7": [89, 113, 81],
    "A8": [81, 113, 81],
    "A9": [81, 113, 89],
    "AA": [81, 113, 97],
    "AB": [81, 113, 105],
    "AC": [81, 113, 113],
    "AD": [81, 105, 113],
    "AE": [81, 97, 113],
    "AF": [81, 89, 113],
    "B0": [0, 0, 65],
    "B1": [16, 0, 65],
    "B2": [32, 0, 65],
    "B3": [49, 0, 65],
    "B4": [65, 0, 65],
    "B5": [65, 0, 49],
    "B6": [65, 0, 32],
    "B7": [65, 0, 16],
    "B8": [65, 0, 0],
    "B9": [65, 16, 0],
    "BA": [65, 32, 0],
    "BB": [65, 49, 0],
    "BC": [65, 65, 0],
    "BD": [49, 65, 0],
    "BE": [32, 65, 0],
    "BF": [16, 65, 0],
    "C0": [0, 65, 0],
    "C1": [0, 65, 16],
    "C2": [0, 65, 32],
    "C3": [0, 65, 49],
    "C4": [0, 65, 65],
    "C5": [0, 49, 65],
    "C6": [0, 32, 65],
    "C7": [0, 16, 65],
    "C8": [32, 32, 65],
    "C9": [40, 32, 65],
    "CA": [49, 32, 65],
    "CB": [57, 32, 65],
    "CC": [65, 32, 65],
    "CD": [65, 32, 57],
    "CE": [65, 32, 49],
    "CF": [65, 32, 40],
    "D0": [65, 32, 32],
    "D1": [65, 40, 32],
    "D2": [65, 49, 32],
    "D3": [65, 57, 32],
    "D4": [65, 65, 32],
    "D5": [57, 65, 32],
    "D6": [49, 65, 32],
    "D7": [40, 65, 32],
    "D8": [32, 65, 32],
    "D9": [32, 65, 40],
    "DA": [32, 65, 49],
    "DB": [32, 65, 57],
    "DC": [32, 65, 65],
    "DD": [32, 57, 65],
    "DE": [32, 49, 65],
    "DF": [32, 40, 65],
    "E0": [45, 45, 65],
    "E1": [49, 45, 65],
    "E2": [53, 45, 65],
    "E3": [61, 45, 65],
    "E4": [65, 45, 65],
    "E5": [65, 45, 61],
    "E6": [65, 45, 53],
    "E7": [65, 45, 49],
    "E8": [65, 45, 45],
    "E9": [65, 49, 45],
    "EA": [65, 53, 45],
    "EB": [65, 61, 45],
    "EC": [65, 65, 45],
    "ED": [61, 65, 45],
    "EE": [53, 65, 45],
    "EF": [49, 65, 45],
    "F0": [45, 65, 45],
    "F1": [45, 65, 49],
    "F2": [45, 65, 53],
    "F3": [45, 65, 61],
    "F4": [45, 65, 65],
    "F5": [45, 61, 65],
    "F6": [45, 53, 65],
    "F7": [45, 49, 65],
    "F8": [0, 0, 0],
    "F9": [0, 0, 0],
    "FA": [0, 0, 0],
    "FB": [0, 0, 0],
    "FC": [0, 0, 0],
    "FD": [0, 0, 0],
    "FE": [0, 0, 0],
    "FF": [0, 0, 0]
};

function findClosestColor(pixel, palette) {
    let minDistance = Infinity;
    let closestColorCode = "00";

    for (const [code, color] of Object.entries(palette)) {
        const distance = Math.sqrt(
            Math.pow(pixel[0] - color[0], 2) +
            Math.pow(pixel[1] - color[1], 2) +
            Math.pow(pixel[2] - color[2], 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            closestColorIndex = code;
        }
    }

    return closestColorIndex.toString(16);
}

function image_to_bin(image) {
    codeout = "";
    //codeout += `${widthImage.value}${heightImage.value}`
    for(let y = 0; y < image.rows; y++) {
        for(let x = 0; x < image.cols; x++) {
            pixel = image.ucharPtr(y, x);
            closestColorIndex = findClosestColor(pixel, pcDosPalette);
            codeout += `${closestColorIndex}`
        }
    }
    return codeout
}

function binToImage(binCode, width, height) {
    let image = new cv.Mat(height, width, cv.CV_8UC3);
    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            let colorCode = binCode.substr((y * width + x) * 2, 2);
            let color = pcDosPalette[colorCode] || [0, 0, 0];
            image.ucharPtr(y, x)[0] = color[0];
            image.ucharPtr(y, x)[1] = color[1];
            image.ucharPtr(y, x)[2] = color[2];
        }
    }
    return image;
}

imgElement.onload = function() {
    let intwidthImage = parseInt(widthImage.value, 10);
    let intheightImage = parseInt(heightImage.value, 10);
    let newSize = new cv.Size(intwidthImage, intheightImage);
    let uploadedImage = cv.imread(imgElement);
    let resizedImage = new cv.Mat();
    cv.resize(uploadedImage, resizedImage, newSize, cv.INTER_NEAREST);
    cv.imshow(canvas, resizedImage);
    codeoutput.value = image_to_bin(resizedImage)
    let reconstructedImage = binToImage(codeoutput.value, intwidthImage, intheightImage);
    cv.imshow(canvas2, reconstructedImage);
    uploadedImage.delete();
    resizedImage.delete();
};
