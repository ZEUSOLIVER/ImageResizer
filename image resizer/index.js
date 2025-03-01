pcDosPalette = {"00": [0, 0, 0]};
let colordisable = "fill:#321332";
let pal0 = true;
let pal1 = true;
let pal2 = true;
let pal3 = true;
let pal4 = true;
let pal5 = true;
let pal6 = true;
let pal7 = true;
let pal8 = true;
let pal9 = true;
let palA = true;
let palB = true;
let palC = true;
let palD = true;
let palE = true;
let palF = true;
let pal10 = true;
let pal11 = true;
let pal12 = true;
let pal13 = true;
let pal14 = true;
let pal15 = true;
let pal16 = true;
let pal17 = true;
let pal18 = true;
let pal19 = true;
let pal1A = true;
let pal1B = true;
let pal1C = true;
let pal1D = true;
let pal1EX = true;
let pal1F = true;
let pal20 = true;
let pal21 = true;
let pal22 = true;
let pal23 = true;
let pal24 = true;
let pal25 = true;
let pal26 = true;
let pal27 = true;
let pal28 = true;
let pal29 = true;
let pal2A = true;
let pal2B = true;
let pal2C = true;
let pal2D = true;
let pal2EX = true;
let pal2F = true;
let pal0E = document.getElementById("pal0")
let pal1E = document.getElementById("pal1")
let pal2E = document.getElementById("pal2")
let pal3E = document.getElementById("pal3")
let pal4E = document.getElementById("pal4")
let pal5E = document.getElementById("pal5")
let pal6E = document.getElementById("pal6")
let pal7E = document.getElementById("pal7")
let pal8E = document.getElementById("pal8")
let pal9E = document.getElementById("pal9")
let palAE = document.getElementById("palA")
let palBE = document.getElementById("palB")
let palCE = document.getElementById("palC")
let palDE = document.getElementById("palD")
let palEE = document.getElementById("palE")
let palFE = document.getElementById("palF")
let pal10E = document.getElementById("pal10")
let pal11E = document.getElementById("pal11")
let pal12E = document.getElementById("pal12")
let pal13E = document.getElementById("pal13")
let pal14E = document.getElementById("pal14")
let pal15E = document.getElementById("pal15")
let pal16E = document.getElementById("pal16")
let pal17E = document.getElementById("pal17")
let pal18E = document.getElementById("pal18")
let pal19E = document.getElementById("pal19")
let pal1AE = document.getElementById("pal1A")
let pal1BE = document.getElementById("pal1B")
let pal1CE = document.getElementById("pal1C")
let pal1DE = document.getElementById("pal1D")
let pal1EE = document.getElementById("pal1E")
let pal1FE = document.getElementById("pal1F")
let pal20E = document.getElementById("pal20")
let pal21E = document.getElementById("pal21")
let pal22E = document.getElementById("pal22")
let pal23E = document.getElementById("pal23")
let pal24E = document.getElementById("pal24")
let pal25E = document.getElementById("pal25")
let pal26E = document.getElementById("pal26")
let pal27E = document.getElementById("pal27")
let pal28E = document.getElementById("pal28")
let pal29E = document.getElementById("pal29")
let pal2AE = document.getElementById("pal2A")
let pal2BE = document.getElementById("pal2B")
let pal2CE = document.getElementById("pal2C")
let pal2DE = document.getElementById("pal2D")
let pal2EE = document.getElementById("pal2E")
let pal2FE = document.getElementById("pal2F")
let imgElement = document.getElementById('imageSrc');
let widthImage = document.getElementById('widthImage');
let heightImage = document.getElementById('heightImage');
let codeoutput = document.getElementById('codeoutput')
let canvas = document.getElementById('canvas');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    updatePalette()
}, false);

widthImage.addEventListener('input', () => {
    widthValue.textContent = widthImage.value;
});

heightImage.addEventListener('input', () => {
    heightValue.textContent = heightImage.value;
});

document.getElementById("resetpalette").onclick = function(){
    updatePalette();
    StartOpen();
}

function updatePalette() {
    pcDosPalette = {
        "00": (pal0==true)?[0, 0, 0]:[5, 5, 5],       // Preto
        "01": (pal1==true)?[0, 0, 170]:[5, 5, 5],     // Azul
        "02": (pal2==true)?[0, 170, 0]:[5, 5, 5],     // Verde
        "03": (pal3==true)?[0, 170, 170]:[5, 5, 5],     // Azul cobalto
        "04": (pal4==true)?[170, 0, 0]:[5, 5, 5],     // Vermelho
        "05": (pal5==true)?[170, 0, 170]:[5, 5, 5], // Violeta
        "06": (pal6==true)?[170, 85, 0]:[5, 5, 5], // Marrom
        "07": (pal7==true)?[170, 170, 170]:[5, 5, 5], // Cinza claro
        "08": (pal8==true)?[85, 85, 85]:[5, 5, 5], // Cinza escuro
        "09": (pal9==true)?[85, 85, 255]:[5, 5, 5], // Azul claro
        "0A": (palA==true)?[85, 255, 85]:[5, 5, 5], // Verde claro
        "0B": (palB==true)?[85, 255, 255]:[5, 5, 5], // Azul céu
        "0C": (palC==true)?[255, 85, 85]:[5, 5, 5], // Red claro
        "0D": (palD==true)?[255, 85, 255]:[5, 5, 5], // Violeta claro
        "0E": (palE==true)?[255, 255, 85]:[5, 5, 5], // Amarelo
        "0F": (palF==true)?[255, 255, 255]:[5, 5, 5], // Branco

        //Adicionais tons de cinza

        "10": (pal10==true)?[0, 0, 0]:[5, 5, 5], 
        "11": (pal11==true)?[16, 16, 16]:[5, 5, 5], 
        "12": (pal12==true)?[32, 32, 32]:[5, 5, 5], 
        "13": (pal13==true)?[53, 53, 53]:[5, 5, 5], 
        "14": (pal14==true)?[69, 69, 69]:[5, 5, 5], 
        "15": (pal15==true)?[85, 85, 85]:[5, 5, 5], 
        "16": (pal16==true)?[101, 101, 101]:[5, 5, 5],
        "17": (pal17==true)?[117, 117, 117]:[5, 5, 5], 
        "18": (pal18==true)?[138, 138, 138]:[5, 5, 5], 
        "19": (pal19==true)?[154, 154, 154]:[5, 5, 5], 
        "1A": (pal1A==true)?[170, 170, 170]:[5, 5, 5], 
        "1B": (pal1B==true)?[186, 186, 186]:[5, 5, 5],
        "1C": (pal1C==true)?[202, 202, 202]:[5, 5, 5], 
        "1D": (pal1D==true)?[223, 223, 223]:[5, 5, 5], 
        "1E": (pal1EX==true)?[239, 239, 239]:[5, 5, 5], 
        "1F": (pal1F==true)?[255, 255, 255]:[5, 5, 5], //
    
    //Adicionais de tons
        "20": (pal20==true)?[0, 0, 255]:[5, 5, 5],
        "21": (pal21==true)?[65, 0, 255]:[5, 5, 5],
        "22": (pal22==true)?[130, 0, 255]:[5, 5, 5],
        "23": (pal23==true)?[190, 0, 255]:[5, 5, 5],
        "24": (pal24==true)?[255, 0, 255]:[5, 5, 5],
        "25": (pal25==true)?[255, 0, 190]:[5, 5, 5],
        "26": (pal26==true)?[255, 0, 130]:[5, 5, 5],
        "27": (pal27==true)?[255, 0, 60]:[5, 5, 5],
        "28": (pal28==true)?[255, 0, 0]:[5, 5, 5],
        "29": (pal29==true)?[255, 65, 0]:[5, 5, 5],
        "2A": (pal2A==true)?[255, 130, 0]:[5, 5, 5],
        "2B": (pal2B==true)?[255, 190, 0]:[5, 5, 5],
        "2C": (pal2C==true)?[255, 255, 0]:[5, 5, 5],
        "2D": (pal2D==true)?[190, 255, 0]:[5, 5, 5],
        "2E": (pal2E==true)?[230, 255, 0]:[5, 5, 5],
        "2F": (pal2F==true)?[65, 255, 0]:[5, 5, 5],
        /*"30": [0, 255, 0],
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
        "67": [186, 202, 255], //
    
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
        "FF": [0, 0, 0]//*/
    };
}

pal0E.onclick = function() {
    if (pal0 == false){
        pal0E.style = "fill:#000000"
        pal0 = true;
    } else {
        pal0E.style = colordisable;
        pal0 = false;
    }
}
pal1E.onclick = function() {
    if (pal1 == false){
        pal1E.style = "fill:#0000AA";
        pal1 = true;
    } else {
        pal1E.style = colordisable;
        pal1 = false;
    }
}
pal2E.onclick = function() {
    if (pal2 == false){
        pal2E.style = "fill:#00AA00";
        pal2 = true;
    } else {
        pal2E.style = colordisable;
        pal2 = false;
    }
}
pal3E.onclick = function() {
    if (pal3 == false){
        pal3E.style = "fill:#00AAAA";
        pal3 = true;
    } else {
        pal3E.style = colordisable;
        pal3 = false;
    }
}
pal4E.onclick = function() {
    if (pal4 == false){
        pal4E.style = "fill:#AA0000";
        pal4 = true;
    } else {
        pal4E.style = colordisable;
        pal4 = false;
    }
}
pal5E.onclick = function() {
    if (pal5 == false){
        pal5E.style = "fill:#AA00AA";
        pal5 = true;
    } else {
        pal5E.style = colordisable;
        pal5 = false;
    }
}
pal6E.onclick = function() {
    if (pal6 == false){
        pal6E.style = "fill:#AA5500";
        pal6 = true;
    } else {
        pal6E.style = colordisable;
        pal6 = false;
    }
}
pal7E.onclick = function() {
    if (pal7 == false){
        pal7E.style = "fill:#AAAAAA";
        pal7 = true;
    } else {
        pal7E.style = colordisable;
        pal7 = false;
    }
}
pal8E.onclick = function() {
    if (pal8 == false){
        pal8E.style = "fill:#555555";
        pal8 = true;
    } else {
        pal8E.style = colordisable;
        pal8 = false;
    }
}
pal9E.onclick = function() {
    if (pal9 == false){
        pal9E.style = "fill:#5555FF";
        pal9 = true;
    } else {
        pal9E.style = colordisable;
        pal9 = false;
    }
}
palAE.onclick = function() {
    if (palA == false){
        palAE.style = "fill:#55FF55";
        palA = true;
    } else {
        palAE.style = colordisable;
        palA = false;
    }
}
palBE.onclick = function() {
    if (palB == false){
        palBE.style = "fill:#55FFFF";
        palB = true;
    } else {
        palBE.style = colordisable;
        palB = false;
    }
}
palCE.onclick = function() {
    if (palC == false){
        palCE.style = "fill:#FF5555";
        palC = true;
    } else {
        palCE.style = colordisable;
        palC = false;
    }
}
palDE.onclick = function() {
    if (palD == false){
        palDE.style = "fill:#FF55FF";
        palD = true;
    } else {
        palDE.style = colordisable;
        palD = false;
    }
}
palEE.onclick = function() {
    if (palE == false){
        palEE.style = "fill:#FFFF55";
        palE = true;
    } else {
        palEE.style = colordisable;
        palE = false;
    }
}
palFE.onclick = function() {
    if (palF == false){
        palFE.style = "fill:#FFFFFF";
        palF = true;
    } else {
        palFE.style = colordisable;
        palF = false;
    }
}
pal10E.onclick = function() {
    if (pal10 == false){
        pal10E.style = "fill:#000000"
        pal10 = true;
    } else {
        pal10E.style = colordisable;
        pal10 = false;
    }
}
pal11E.onclick = function() {
    if (pal11 == false){
        pal11E.style = "fill:#101010";
        pal11 = true;
    } else {
        pal11E.style = colordisable;
        pal11 = false;
    }
}
pal12E.onclick = function() {
    if (pal12 == false){
        pal12E.style = "fill:#202020";
        pal12 = true;
    } else {
        pal12E.style = colordisable;
        pal12 = false;
    }
}
pal13E.onclick = function() {
    if (pal13 == false){
        pal13E.style = "fill:#353535";
        pal13 = true;
    } else {
        pal13E.style = colordisable;
        pal13 = false;
    }
}
pal14E.onclick = function() {
    if (pal14 == false){
        pal14E.style = "fill:#454545";
        pal14 = true;
    } else {
        pal14E.style = colordisable;
        pal14 = false;
    }
}
pal15E.onclick = function() {
    if (pal15 == false){
        pal15E.style = "fill:#555555";
        pal15 = true;
    } else {
        pal15E.style = colordisable;
        pal15 = false;
    }
}
pal16E.onclick = function() {
    if (pal16 == false){
        pal16E.style = "fill:#656565";
        pal16 = true;
    } else {
        pal16E.style = colordisable;
        pal16 = false;
    }
}
pal17E.onclick = function() {
    if (pal17 == false){
        pal17E.style = "fill:#757575";
        pal17 = true;
    } else {
        pal17E.style = colordisable;
        pal17 = false;
    }
}
pal18E.onclick = function() {
    if (pal18 == false){
        pal18E.style = "fill:#8A8A8A";
        pal18 = true;
    } else {
        pal18E.style = colordisable;
        pal18 = false;
    }
}
pal19E.onclick = function() {
    if (pal19 == false){
        pal19E.style = "fill:#9A9A9A";
        pal19 = true;
    } else {
        pal19E.style = colordisable;
        pal19 = false;
    }
}
pal1AE.onclick = function() {
    if (pal1A == false){
        pal1AE.style = "fill:#AAAAAA";
        pal1A = true;
    } else {
        pal1AE.style = colordisable;
        pal1A = false;
    }
}
pal1BE.onclick = function() {
    if (pal1B == false){
        pal1BE.style = "fill:#BABABA";
        pal1B = true;
    } else {
        pal1BE.style = colordisable;
        pal1B = false;
    }
}
pal1CE.onclick = function() {
    if (pal1C == false){
        pal1CE.style = "fill:#CACACA";
        pal1C = true;
    } else {
        pal1CE.style = colordisable;
        pal1C = false;
    }
}
pal1DE.onclick = function() {
    if (pal1D == false){
        pal1DE.style = "fill:#DFDFDF";
        pal1D = true;
    } else {
        pal1DE.style = colordisable;
        pal1D = false;
    }
}
pal1EE.onclick = function() {
    if (pal1EX == false){
        pal1EE.style = "fill:#EFEFEF";
        pal1EX = true;
    } else {
        pal1EE.style = colordisable;
        pal1EX = false;
    }
}
pal1FE.onclick = function() {
    if (pal1F == false){
        pal1FE.style = "fill:#FFFFFF";
        pal1F = true;
    } else {
        pal1FE.style = colordisable;
        pal1F = false;
    }
}
pal20E.onclick = function() {
    if (pal20 == false){
        pal20E.style = "fill:#0000FF"
        pal20 = true;
    } else {
        pal20E.style = colordisable;
        pal20 = false;
    }
}
pal21E.onclick = function() {
    if (pal21 == false){
        pal21E.style = "fill:#4100FF";
        pal21 = true;
    } else {
        pal21E.style = colordisable;
        pal21 = false;
    }
}
pal22E.onclick = function() {
    if (pal22 == false){
        pal22E.style = "fill:#8200FF";
        pal22 = true;
    } else {
        pal22E.style = colordisable;
        pal22 = false;
    }
}
pal23E.onclick = function() {
    if (pal23 == false){
        pal23E.style = "fill:#BE00FF";
        pal23 = true;
    } else {
        pal23E.style = colordisable;
        pal23 = false;
    }
}
pal24E.onclick = function() {
    if (pal24 == false){
        pal24E.style = "fill:#FF00FF";
        pal24 = true;
    } else {
        pal24E.style = colordisable;
        pal24 = false;
    }
}
pal25E.onclick = function() {
    if (pal25 == false){
        pal25E.style = "fill:#FF00BE";
        pal25 = true;
    } else {
        pal25E.style = colordisable;
        pal25 = false;
    }
}
pal26E.onclick = function() {
    if (pal26 == false){
        pal26E.style = "fill:#FF0082";
        pal26 = true;
    } else {
        pal26E.style = colordisable;
        pal26 = false;
    }
}
pal27E.onclick = function() {
    if (pal27 == false){
        pal27E.style = "fill:#FF0041";
        pal27 = true;
    } else {
        pal27E.style = colordisable;
        pal27 = false;
    }
}
pal28E.onclick = function() {
    if (pal28 == false){
        pal28E.style = "fill:#FF0000";
        pal28 = true;
    } else {
        pal28E.style = colordisable;
        pal28 = false;
    }
}
pal29E.onclick = function() {
    if (pal29 == false){
        pal29E.style = "fill:#FF4100";
        pal29 = true;
    } else {
        pal29E.style = colordisable;
        pal29 = false;
    }
}
pal2AE.onclick = function() {
    if (pal2A == false){
        pal2AE.style = "fill:#FF8200";
        pal2A = true;
    } else {
        pal2AE.style = colordisable;
        pal2A = false;
    }
}
pal2BE.onclick = function() {
    if (pal2B == false){
        pal2BE.style = "fill:#FFBE00";
        pal2B = true;
    } else {
        pal2BE.style = colordisable;
        pal2B = false;
    }
}
pal2CE.onclick = function() {
    if (pal2C == false){
        pal2CE.style = "fill:#FFFF00";
        pal2C = true;
    } else {
        pal2CE.style = colordisable;
        pal2C = false;
    }
}
pal2DE.onclick = function() {
    if (pal2D == false){
        pal2DE.style = "fill:#BEFF00";
        pal2D = true;
    } else {
        pal2DE.style = colordisable;
        pal2D = false;
    }
}
pal2EE.onclick = function() {
    if (pal2EX == false){
        pal2EE.style = "fill:#82FF00";
        pal2EX = true;
    } else {
        pal2EE.style = colordisable;
        pal2EX = false;
    }
}
pal2FE.onclick = function() {
    if (pal2F == false){
        pal2FE.style = "fill:#41FF00";
        pal2F = true;
    } else {
        pal2FE.style = colordisable;
        pal2F = false;
    }
}

function findClosestColor(pixel, palette) {
    let minDistance = Infinity;
    let closestColorCode = "00";

    for (const [code, color] of Object.entries(palette)) {
        if (color[0]!=5 || color[1]!=5 || color[2]!=5){
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

imgElement.onload=StartOpen
function StartOpen() {
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
