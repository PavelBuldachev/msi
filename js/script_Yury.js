document.addEventListener("DOMContentLoaded", function () {

    let retryButton = document.querySelector(".filter__retry");
    let stepOneArr = document.querySelectorAll(".step-one .filter__item-main span");

    let stepTwoBlockArr = document.querySelectorAll(".step-two");
    let stepTwoArr = document.querySelectorAll(".step-two .filter__item");

    let stepThreeBlockArr = document.querySelectorAll(".step-three");
    let stepThreeArr = document.querySelectorAll(".step-three .filter__item");

    let stepFourBlockArr = document.querySelectorAll(".step-four");
    let stepFourArr = document.querySelectorAll(".step-four .filter__item");

    let stepFiveBlockArr = document.querySelectorAll(".step-five");

    let arrow = document.querySelector(".arrow-down-new");

    let items = document.querySelectorAll(".filter__tech-item");


    let room = document.querySelector(".room");
    let btDownload = document.querySelector(".bt-download");
    let btDownloadMob = document.querySelector(".bt-download-mob");

    /*switch_href = (h) =>
    {
        switch(h)
        {
            case 'Экшн_Infinite-S3':
                return ['https://ru.msi.com','dt'];
                break;
        }
    } */

    /*
    A[ind][0] - DNS link 
    A[ind][1] - img name for download PC version
    A[ind][2] - model1 title 
    A[ind][3] - BUY botton's style for left 
    A[ind][4] - BUY botton's style for top 
    A[ind][5] - img name for download mobile version 
    
    A[ind][6] - model2 link
    A[ind][7] - model2 title
    A[ind][8] - BUY button's for model2 style for left 
    A[ind][9] - BUY button's for model2 style for top 
    
    A[ind][10] - model3 link
    A[ind][11] - model3 title
    A[ind][12] - BUY button's for model3 style for left 
    A[ind][13] - BUY button's for model3 style for top 
    
    A[ind][14] - model4 link
    A[ind][15] - model4 title
    A[ind][16] - BUY button's for model4 style for left 
    A[ind][17] - BUY button's for model4 style for top 
    
    A[ind][18] - model5 link
    A[ind][19] - model5 title
    A[ind][20] - BUY button's for model5 style for left 
    A[ind][21] - BUY button's for model5 style for top 
    */
    let A = {
        0: ['https://msi.gm/SB3935E2', 'hardcore-meg342c-Trident-X2dt.jpg', 'MEG 342C QD-OLED', '44.2%', '21%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'MEG 342C QD-OLED', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        1: ['https://msi.gm/S33BC65F', 'Hardcore-MAG_341CQP_QD-OLED-AegisTi5-MAG_CH120X.jpg', 'MAG 341CQP QD-OLED', '44.2%', '21%', 'Hardcore1-MEG381CQR-Infinite-X2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'MAG 341CQP QD-OLED', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        2: ['https://msi.gm/S30AD995', 'Hardcore-MPG341QR-AegisTi5-MAG_CH120X.jpg', 'Optix MPG341QR', '44.2%', '21%', 'Hardcore1-MPG341QR-AegisTi5-MAG_CH120X_mob.jpg', '', 'Optix MPG341QR', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        3: ['https://msi.gm/S2780285', 'Hardcore_LP.jpg', 'MEG Trident X2', '8%', '25%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'MEG Trident X2', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        4: ['https://msi.gm/S1D91F01', 'Hardcore-MAG_341CQP_QD-OLED-AegisTi5-MAG_CH120X.jpg', 'MPG INFINITE X2', '8%', '25%', 'Hardcore1-MEG381CQR-Infinite-X2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'MPG INFINITE X2', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        5: ['https://msi.gm/SA6E1003', 'Hardcore-MPG341QR-AegisTi5-MAG_CH120X.jpg', 'MEG Aegis Ti5', '8%', '25%', 'Hardcore1-MPG341QR-AegisTi5-MAG_CH120X_mob.jpg', '', 'MEG Aegis Ti5', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        6: ['https://msi.gm/SAF5E585', 'Hardcore-mag-ch130i.jpg', 'MAG CH130 I REPELTEK FABRIC', '81%', '20%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'MAG CH130 I REPELTEK FABRIC', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        7: ['https://msi.gm/SE15A050', 'Hardcore-MPG341QR-AegisTi5-MAG_CH120X.jpg', 'MAG CH120 X', '81%', '20%', 'Hardcore1-MPG341QR-AegisTi5-MAG_CH120X_mob.jpg', '', 'MAG CH120 X', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        8: ['https://msi.gm/S97A133D', 'hardcore-meg342c-Trident-X2dt.jpg', 'VIGOR GK71 SONIC', '51%', '67%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'VIGOR GK71 SONIC', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        9: ['https://msi.gm/S62D351F', 'hardcore-meg342c-Trident-X2dt.jpg', 'CLUTCH GM41 LIGHTWEIGHT wireless', '66%', '67%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', '', 'CLUTCH GM41 LIGHTWEIGHT wireless', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        10: ['https://msi.gm/SB3935E2', 'hardcore-meg342c-Trident-X2dt.jpg', 'MEG 342C QD-OLED', '44.2%', '20%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', 'https://msi.gm/S2780285', 'MEG Trident X2', '15%', '20%', 'https://msi.gm/SAF5E585', 'MAG CH130 I REPELTEK FABRIC', '81%', '20%', 'https://msi.gm/S97A133D', 'VIGOR GK71 SONIC', '51%', '67%', 'https://msi.gm/S62D351F', 'CLUTCH GM41 LIGHTWEIGHT wireless', '66%', '67%'],
        11: ['https://msi.gm/S2780285', 'hardcore-meg342c-Trident-X2dt.jpg', 'MEG Trident X2', '15%', '20%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', 'https://msi.gm/SB3935E2', 'MEG 342C QD-OLED', '44.2%', '20%', 'https://msi.gm/SAF5E585', 'MAG CH130 I REPELTEK FABRIC', '81%', '20%', 'https://msi.gm/S97A133D', 'VIGOR GK71 SONIC', '51%', '67%', 'https://msi.gm/S62D351F', 'CLUTCH GM41 LIGHTWEIGHT wireless', '66%', '67%'],
        12: ['https://msi.gm/SAF5E585', 'hardcore-meg342c-Trident-X2dt.jpg', 'MAG CH130 I REPELTEK FABRIC', '81%', '20%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', 'https://msi.gm/S2780285', 'MEG Trident X2', '15%', '20%', 'https://msi.gm/SB3935E2', 'MEG 342C QD-OLED', '44.2%', '20%', 'https://msi.gm/S97A133D', 'VIGOR GK71 SONIC', '51%', '67%', 'https://msi.gm/S62D351F', 'CLUTCH GM41 LIGHTWEIGHT wireless', '66%', '67%'],
        13: ['https://msi.gm/S97A133D', 'hardcore-meg342c-Trident-X2dt.jpg', 'VIGOR GK71 SONIC', '51%', '67%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', 'https://msi.gm/S62D351F', 'CLUTCH GM41 LIGHTWEIGHT wireless', '66%', '67%', 'https://msi.gm/SAF5E585', 'MAG CH130 I REPELTEK FABRIC', '81%', '20%', 'https://msi.gm/S2780285', 'MEG Trident X2', '15%', '20%', 'https://msi.gm/SB3935E2', 'MEG 342C QD-OLED', '44.2%', '20%'],
        14: ['https://msi.gm/S62D351F', 'hardcore-meg342c-Trident-X2dt.jpg', 'CLUTCH GM41 LIGHTWEIGHT wireless', '66%', '67%', 'Hardcore1-MEG342C-TridentX2-MAG-CH130-I-REPELTEK-FABRIC_mob.jpg', 'https://msi.gm/S97A133D', 'VIGOR GK71 SONIC', '51%', '67%', 'https://msi.gm/SAF5E585', 'MAG CH130 I REPELTEK FABRIC', '81%', '20%', 'https://msi.gm/S2780285', 'MEG Trident X2', '15%', '20%', 'https://msi.gm/SB3935E2', 'MEG 342C QD-OLED', '44.2%', '20%'],


        15: ['https://msi.gm/S0E33B3D', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'MAG 325CQRXF', '42%', '24%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', '', 'MAG 325CQRXF', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        16: ['https://msi.gm/S8598E8D', 'pro-MAG_274UPF-InfiniteX-MAGCH130X.jpg', 'MAG 274UPF', '42%', '24%', 'pro-MAG_274UPF-InfiniteX-MAGCH130X_mob.jpg', '', 'MAG 274UPF', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        17: ['https://msi.gm/S0F8193D', 'pro-MAG-275CQRF-QD-TridentAS-MAGCH120', 'MAG 275CQRF-QD', '42%', '24%', 'pro-MAG-275CQRF-QD-TridentAS-MAGCH120_mob.jpg', '', 'MAG 275CQRF-QD', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        18: ['https://msi.gm/S8347F0F', 'pro-MAG_274UPF-InfiniteX-MAGCH130X.jpg', 'MEG Infinite X', '16%', '32%', 'pro-MAG_274UPF-InfiniteX-MAGCH130X_mob.jpg', '', 'MEG Infinite X', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        19: ['https://msi.gm/S1D91F01', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'MPG INFINITE X2', '16%', '32%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', '', 'MPG INFINITE X2', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        20: ['https://msi.gm/S2913099', 'pro-MAG-275CQRF-QD-TridentAS-MAGCH120.jpg', 'MPG Trident AS', '16%', '32%', 'pro-MAG-275CQRF-QD-TridentAS-MAGCH120_mob.jpg', '', 'MPG Trident AS', '-100%', '', '', 'MPG Trident AS', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        21: ['https://msi.gm/S62BA1BF', 'pro-MAG-275CQRF-QD-TridentAS-MAGCH120.jpg', 'MAG CH120', '83%', '20%', 'pro-MAG-275CQRF-QD-TridentAS-MAGCH120_mob.jpg', '', 'MAG CH120', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        22: ['https://msi.gm/S436A592', 'pro-MAG_274UPF-InfiniteX-MAGCH130X.jpg', 'MAG CH130 X', '83%', '20%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', '', 'MAG CH130 X', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        23: ['https://msi.gm/S72688A6', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'VIGOR GK50 ELITE KAILH BLUE', '33%', '67%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/S9A9A26F', 'VIGOR GK50 ELITE KAILH BLUE', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        24: ['https://msi.gm/S9A9A26F', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'CLUTCH GM31 LIGHTWEIGHT', '56%', '67%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/S72688A6', 'CLUTCH GM31 LIGHTWEIGHT', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        25: ['https://msi.gm/SD44CF52', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'MAG 325CQRXF', '41.6%', '23%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/S1D91F01', 'MPG INFINITE X2', '12.5%', '23%', 'https://msi.gm/S436A592', 'MAG CH130 X', '78.2%', '23%', 'https://msi.gm/S72688A6', 'VIGOR GK50 ELITE KAILH BLUE', '33%', '67%', 'https://msi.gm/S9A9A26F', 'CLUTCH GM31 LIGHTWEIGHT', '56%', '67%'],
        26: ['https://msi.gm/S1D91F01', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'MPG INFINITE X2', '12.5%', '23%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/SD44CF52', 'MAG 325CQRXF', '41.6%', '23%', 'https://msi.gm/S436A592', 'MAG CH130 X', '78.2%', '23%', 'https://msi.gm/S72688A6', 'VIGOR GK50 ELITE KAILH BLUE', '33%', '67%', 'https://msi.gm/S9A9A26F', 'CLUTCH GM31 LIGHTWEIGHT', '56%', '67%'],
        27: ['https://msi.gm/S436A592', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'MAG CH130 X', '78.2%', '23%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/S1D91F01', 'MPG INFINITE X2', '12.5%', '23%', 'https://msi.gm/SCFB59C7', 'MAG 325CQRXF', '41.6%', '23%', 'https://msi.gm/S72688A6', 'VIGOR GK50 ELITE KAILH BLUE', '33%', '67%', 'https://msi.gm/S9A9A26F', 'CLUTCH GM31 LIGHTWEIGHT', '56%', '67%'],
        28: ['https://msi.gm/S72688A6', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'VIGOR GK50 ELITE KAILH BLUE', '33%', '67%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/S9A9A26F', 'CLUTCH GM31 LIGHTWEIGHT', '56%', '67%', 'https://msi.gm/SD44CF52', 'MAG 325CQRXF', '41.6%', '23%', 'https://msi.gm/S1D91F01', 'MPG INFINITE X2', '12.5%', '23%', 'https://msi.gm/S436A592', 'MAG CH130 X', '78.2%', '23%'],
        29: ['https://msi.gm/S9A9A26F', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X.jpg', 'CLUTCH GM31 LIGHTWEIGHT', '56%', '67%', 'pro-MAG-325CQRXF-InfiniteX2-MAGCH130X_mob.jpg', 'https://msi.gm/S72688A6', 'VIGOR GK50 ELITE KAILH BLUE', '33%', '67%', 'https://msi.gm/SD44CF52', 'MAG 325CQRXF', '41.6%', '23%', 'https://msi.gm/S1D91F01', 'MPG INFINITE X2', '12.5%', '23%', 'https://msi.gm/S436A592', 'MAG CH130 X', '78.2%', '23%'],


        30: ['https://msi.gm/S094F22B', 'casual_MSI-Choice.jpg', 'MAG321QR', '43.7%', '21%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', '', 'MAG321QR', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        31: ['https://msi.gm/S72986E6', 'casual_MAG342CQPV_Trident-3.jpg', 'MAG342CQPV', '43.7%', '21%', 'casual1-MAG342CQPV-Trident3-MAG-CH130I-FABRIC_mob.jpg', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        32: ['https://msi.gm/SFEEC5AA', 'casual_G281UV_META-5.jpg', 'G281UV', '43.7%', '21%', 'casual1-G281UV-META5MAGCH120I_mob.jpg', '', 'G281UV', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        33: ['https://msi.gm/S0E38000', 'casual_MSI-Choice.jpg', 'MAG Infinite S3', '12.8%', '27%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', '', 'MAG Infinite S3', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        34: ['https://msi.gm/SC150DED', 'casual_MAG342CQPV_Trident-3.jpg', 'MPG Trident 3', '12.8%', '27%', 'casual1-MAG342CQPV-Trident3-MAG-CH130I-FABRIC_mob.jpg', '', 'MPG Trident 3', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        35: ['https://msi.gm/S5B2951E', 'casual_G281UV_META-5.jpg', 'MAG CODEX 5', '12.8%', '27%', 'casual1-G281UV-META5MAGCH120I_mob.jpg', '', 'MAG CODEX 5', '-100%', '', '', 'MAG CODEX 5', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        36: ['https://msi.gm/S2211762', 'casual_G281UV_META-5.jpg', 'MAG CH120 I', '82.3%', '15%', 'casual1-G281UV-META5MAGCH120I_mob.jpg', '', 'MAG CH120 I', '-100%', '', '', 'MAG CH120 I', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        37: ['https://msi.gm/S844DC75', 'casual_MAG342CQPV_Trident-3.jpg', 'MAG CH130 I FABRIC', '82.3%', '15%', 'casual1-MAG342CQPV-Trident3-MAG-CH130I-FABRIC_mob.jpg', '', 'MAG CH130 I FABRIC', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        38: ['https://msi.gm/S82FA7F8', 'casual_MSI-Choice.jpg', 'VIGOR GK20', '36%', '67%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S79D5ABE', 'VIGOR GK20', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        39: ['https://msi.gm/S79D5ABE', 'casual_MSI-Choice.jpg', 'CLUTCH GM11 BLACK', '62%', '67%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S82FA7F8', 'CLUTCH GM11 BLACK', '-100%', '', '', '', '-100%', '', '', '', '-100%', '', '', '', '-100%', ''],
        40: ['https://msi.gm/S094F22B', 'casual_MSI-Choice.jpg', 'MAG321QR', '44.7%', '24%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S0E38000', 'MAG Infinite S3', '17.1%', '24%', 'https://msi.gm/S844DC75', 'MAG CH130 I FABRIC', '79.2%', '24%', 'https://msi.gm/S82FA7F8', 'VIGOR GK20', '36%', '67%', 'https://msi.gm/S79D5ABE', 'CLUTCH GM11 BLACK', '62%', '67%'],
        41: ['https://msi.gm/S0E38000', 'casual_MSI-Choice.jpg', 'MAG Infinite S3', '17.1%', '24%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S094F22B', 'MAG321QR', '44.7%', '24%', 'https://msi.gm/S844DC75', 'MAG CH130 I FABRIC', '79.2%', '24%', 'https://msi.gm/S82FA7F8', 'VIGOR GK20', '36%', '67%', 'https://msi.gm/S79D5ABE', 'CLUTCH GM11 BLACK', '62%', '67%'],
        42: ['https://msi.gm/S844DC75', 'casual_MSI-Choice.jpg', 'MAG CH130 I FABRIC', '79.2%', '24%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S094F22B', 'MAG321QR', '44.7%', '24%', 'https://msi.gm/S0E38000', 'MAG Infinite S3', '17.1%', '24%', 'https://msi.gm/S82FA7F8', 'VIGOR GK20', '36%', '67%', 'https://msi.gm/S79D5ABE', 'CLUTCH GM11 BLACK', '62%', '67%'],
        43: ['https://msi.gm/S82FA7F8', 'casual_MSI-Choice.jpg', 'VIGOR GK20', '36%', '67%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S79D5ABE', 'CLUTCH GM11 BLACK', '62%', '67%', 'https://msi.gm/S094F22B', 'MAG321QR', '44.7%', '24%', 'https://msi.gm/S0E38000', 'MAG Infinite S3', '17.1%', '24%', 'https://msi.gm/S844DC75', 'MAG CH130 I FABRIC', '79.2%', '24%'],
        44: ['https://msi.gm/S79D5ABE', 'casual_MSI-Choice.jpg', 'CLUTCH GM11 BLACK', '62%', '67%', 'casual1-MAG21QR-InfiniteS3-MAG_CH130I-FABRIC_mob.jpg', 'https://msi.gm/S82FA7F8', 'VIGOR GK20', '36%', '67%', 'https://msi.gm/S094F22B', 'MAG321QR', '44.7%', '24%', 'https://msi.gm/S0E38000', 'MAG Infinite S3', '17.1%', '24%', 'https://msi.gm/S844DC75', 'MAG CH130 I FABRIC', '79.2%', '24%']


        /* 
        ['https://bit.ly/3WS1le7', 'Экшн_Trident-X.jpg', 'MEG Trident X', '19.6%', '30%','Экшн_TridentX_mob.jpg', 'https://bit.ly/3WCaJlM', 'KB title', '42%', '62%']
        ['https://bit.ly/3zOcy59', 'Optix_G272.jpg', 'Optix G272', '41.7%', '25%','Optix_G272_mob.jpg', 'https://bit.ly/3WCaJlM', 'KB title', '42%', '62%']
             ['https://bit.ly/3UwPz6L', 'Optix_G242.jpg', 'Optix G242', '41.7%', '25%','Optix_G242_mob.jpg', 'https://bit.ly/3WCaJlM', 'KB title', '42%', '62%']   
             ['https://bit.ly/3FTNFZG', 'MMO_Codex-5.jpg', 'MAG Codex 5', '16%', '29%','World-of-warcraft_MAG_Codex_5_11th_mob.jpg', 'https://bit.ly/3WCaJlM', 'KB title', '42%', '62%'] 
             ['https://ru.msi.com/Desktop/MEG-Aegis-Ti5-12th', 'Стриминк_Aegis-Ti5.jpg', 'MEG AEGIS Ti5', '13%', '32%','Стриминг_Aegis-Ti5_mob.jpg', 'https://bit.ly/3WCaJlM', 'KB title', '42%', '62%']
         33: ['https://bit.ly/3NOHvvR', 'Optix_G27C7_2D1.jpg', 'Optix G27C7', '41.67%', '26%','Optix_G27C7_2D1_mob.jpg'],
         34: ['https://ru.msi.com/Monitor/Optix-MAG272C/support', 'MAG272C_2D1.jpg', 'Optix MAG272C', '41.67%', '26%','MAG272C_2D1_mob.jpg'],
         35: ['https://ru.msi.com/Monitor/MPG-ARTYMIS-273CQR', 'MPG-273CQR_2D1.jpg', 'Artymis 273CQR', '41.6%', '20%','MPG-273CQR_2D1_mob.jpg'],
         36: ['https://bit.ly/3hqb0bb', 'MPG-323CQR.jpg', 'Artymis 323CQR', '41.6%', '20%','MPG-ARTYMIS-323CQR_mob.jpg'],
         37: ['https://bit.ly/3Ul0xwy', 'Optix_G27CQ4_2D1.jpg', 'Optix G27CQ4', '41.7%', '26%','Optix_G27CQ4_2D1_mob.jpg'],
         38: ['https://bit.ly/3UBqF66', 'Optix_MAG301CR2_2D1-1.jpg', 'Optix MAG301CR2', '41.7%', '26%','Optix_MAG301CR2_2D1-1_mob.jpg'],
         39: ['https://bit.ly/3A0woKH', 'Optix_MAG342CQRV.jpg.jpg', 'MAG342CQRV', '41.7%', '26%','Optix_MAG342CQRV_mob.jpg.jpg'],
         40: ['https://ru.msi.com/Monitor/MPG-ARTYMIS-343CQR', 'MPG-ARTYMIS-343CQR.jpg', 'Artymis 343CQR', '41.8%', '24%','MPG-ARTYMIS-343CQR_mob.jpg'],
         41: ['https://bit.ly/3UBzEE7', 'Optix_G32CQ4_2D1.jpg', 'Optix G32CQ4', '42.2%', '19.5%','Optix_G32CQ4_2D1_mob.jpg'],
         42: ['https://bit.ly/3Ud0y5u', 'Экшн_Trident3.jpg', 'MPG Trident 3', '19.6%', '30%','Экшн_Trident-3_mob.jpg', 'https://bit.ly/3WCaJlM', 'KB title', '42%', '62%']
        */
        /* */
    }

    //------------------------------------------------------------------------------------------------------


    let knopka = document.createElement('a');
    knopka.className = "knopka";
    //knopka.classList.add("hidden");
    //knopka.innerHTML = "Купить <br>";
    room.append(knopka);

    let knopka2 = document.createElement('a');
    knopka2.className = "knopka2";
    //knopka.classList.add("hidden");
    //knopka.innerHTML = "Купить <br>";
    room.append(knopka2);

    let knopka3 = document.createElement('a');
    knopka3.className = "knopka3";
    //knopka.classList.add("hidden");
    //knopka.innerHTML = "Купить <br>";
    room.append(knopka3);

    let knopka4 = document.createElement('a');
    knopka4.className = "knopka4";
    //knopka.classList.add("hidden");
    //knopka.innerHTML = "Купить <br>";
    room.append(knopka4);

    let knopka5 = document.createElement('a');
    knopka5.className = "knopka5";
    //knopka.classList.add("hidden");
    //knopka.innerHTML = "Купить <br>";
    room.append(knopka5);

    /*  let knopkaMob = document.createElement('a');
      knopkaMob.className = "knopkaMob";
      room.append(knopkaMob);	*/


    //------------------------------------------------------------------------------------------------------



    retryButton.addEventListener(
        'click',
        () => {
            stepOneArr.forEach(item => {
                item.parentElement.classList.remove("-disable");
                item.parentElement.classList.remove("-active");

                let stepOneParentRow = item.parentElement.parentElement;
                let stepOneParentBlock = item.parentElement;

                stepOneParentBlock.classList.remove("-disable");
                stepOneParentBlock.classList.remove("-active");
                stepOneParentRow.classList.remove("-disable");
                stepOneParentRow.classList.remove("-active");
                retryButton.classList.remove("-active");
                retryButton.classList.remove("-active");
            })
            stepTwoBlockArr.forEach(item2 => {
                item2.classList.remove("-active");
            })

            stepThreeBlockArr.forEach(item3 => {
                item3.classList.remove("-active");
            })
            stepTwoArr.forEach(item4 => {
                item4.classList.remove("-active");
            })

            stepThreeArr.forEach(item5 => {
                item5.classList.remove("-active");
            })

            stepFourBlockArr.forEach(item6 => {
                item6.classList.remove("-active");
            })
            stepFourArr.forEach(item9 => {
                item9.classList.remove("-active");
            })

            stepFiveBlockArr.forEach(item8 => {
                item8.classList.remove("-active");
            })
            arrow.classList.remove("-active")

            items.forEach(item7 => {
                item7.classList.remove("-active");
            })
            room.classList.remove("-active");

        }
    )

    stepOneArr.forEach(item => {

        item.addEventListener(
            'click',
            () => {

                stepOneArr.forEach(item1 => {
                    item1.parentElement.classList.add("-disable");
                })

                let stepOneParentRow = item.parentElement.parentElement;
                let stepOneParentBlock = item.parentElement;

                stepOneParentBlock.classList.remove("-disable");
                stepOneParentBlock.classList.add("-active");
                stepOneParentRow.classList.add("-active");
                retryButton.classList.add("-active");

                stepTwoBlockArr.forEach(item2 => {
                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");
                        window.scrollBy({
                            top: item2.getBoundingClientRect().top - 25,
                            // top: item2.offsetTop - 25,
                            behavior: "smooth"
                        });
                        // item2.scrollIntoView({block: "start", behavior: "smooth"});

                    }
                })
            }
        )
    })

    stepTwoArr.forEach(item => {
        item.addEventListener(
            'click',
            () => {
                stepTwoArr.forEach(item1 => {
                    item1.classList.remove("-active");
                })

                stepThreeArr.forEach(item1 => {
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                stepThreeBlockArr.forEach(item2 => {

                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");

                        // item2.scrollIntoView({block: "start", behavior: "smooth"});

                        window.scrollBy({                                               // evgeny
                            top: item2.getBoundingClientRect().top - 100,              // evgeny 
                            // top: item2.offsetTop - 25,                         // evgeny
                            behavior: "smooth"                  // evgeny 
                        });



                        if (window.innerWidth < 770) {
                            document.getElementsByClassName("video-block")[0].style = "margin-top: 40% !important;" // video-block ne nalezai v mob
                        }




                    }

                })

                stepFourBlockArr.forEach(item2 => {
                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");
                    }

                })

                stepFourArr.forEach(item9 => {
                    item9.classList.remove("-active");
                })

                stepFiveBlockArr.forEach(item2 => {
                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");

                    }
                })

                items.forEach(item7 => {
                    item7.classList.remove("-active");

                })
                arrow.classList.remove("-active")

                room.classList.remove("-active")

            }
        )
    })

    stepThreeArr.forEach(item => {
        item.addEventListener(
            'click',
            () => {
                stepThreeArr.forEach(item1 => {
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                stepFourBlockArr.forEach(item2 => {
                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");
                        // item2.scrollIntoView({block: "start", behavior: "smooth"});
                        window.scrollBy({
                            // top: item2.offsetTop - 25,
                            top: item2.getBoundingClientRect().top - 25,
                            behavior: "smooth"
                        });
                    }
                })

                stepFiveBlockArr.forEach(item2 => {
                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");
                        item2.scrollIntoView({ block: "start", behavior: "smooth" });
                    }
                })
                stepFourArr.forEach(item9 => {
                    item9.classList.remove("-active");
                })

                items.forEach(item7 => {
                    item7.classList.remove("-active");
                })

                if (item.dataset.arrow == 'Y') {
                    arrow.classList.add("-active")
                } else {
                    arrow.classList.remove("-active")
                }
                room.classList.remove("-active")

            }
        )
    })


    stepFourArr.forEach(item => {
        item.addEventListener(
            'click',
            () => {
                stepFourArr.forEach(item1 => {
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                stepFiveBlockArr.forEach(item2 => {
                    item2.classList.remove("-active");
                    if (item.dataset.step == item2.dataset.step) {
                        item2.classList.add("-active");
                        // item2.scrollIntoView({block: "start", behavior: "smooth"});
                        window.scrollBy({
                            // top: item2.offsetTop - 25,
                            top: item2.getBoundingClientRect().top - 25,
                            behavior: "smooth"
                        });
                    }
                })

                items.forEach(item7 => {
                    item7.classList.remove("-active");
                })

                if (item.dataset.arrow == 'Y') {
                    arrow.classList.add("-active")
                }

                room.classList.remove("-active")

            }
        )
    })

    items.forEach((item, ind) => {
        item.addEventListener(
            'click',
            () => {
                document.querySelector('.knopka').classList.remove('kb');
                document.querySelector('.knopka2').classList.remove('kb');
                document.querySelector('.knopka3').classList.remove('kb');
                document.querySelector('.knopka4').classList.remove('kb');
                document.querySelector('.knopka5').classList.remove('kb');


                items.forEach(item1 => {
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                //console.log(ind);
                //console.log(A[ind]);


                //console.log(switch_href(item.dataset.image.split('/')[4].replace(/.jpg/,''))[1]);

                room.firstElementChild.firstElementChild.srcset = item.dataset.imagemob
                room.firstElementChild.lastElementChild.src = item.dataset.image

                room.classList.add("-active")
                // room.scrollIntoView({block: "start", behavior: "smooth"});





                knopka.setAttribute('href', A[ind][0]);
                knopka.setAttribute('target', '_blank');
                knopka.setAttribute('title', A[ind][2]);
                if ((A[ind][2] === 'VIGOR GK71 SONIC') || (A[ind][2] === 'CLUTCH GM41 LIGHTWEIGHT wireless') || (A[ind][2] === 'VIGOR GK50 ELITE KAILH BLUE') || (A[ind][2] === 'CLUTCH GM31 LIGHTWEIGHT') || (A[ind][2] === 'VIGOR GK20') || (A[ind][2] === 'CLUTCH GM11 BLACK')) {
                    /* knopka.setAttribute('style', `background: red !important;`);*/
                    /*knopka.style.background = 'url(../images/Button_22.svg) !important;';*/
                    document.querySelector('.knopka').classList.add('kb'); /* adding class kb */

                }
                knopka.innerHTML = "Купить&nbsp;<br>" + A[ind][2];
                console.log(window.innerHeight);
                console.log(window.innerWidth);
                if (window.innerWidth > 770) {
                    knopka.setAttribute('style', `left: ${A[ind][3]}; top: ${A[ind][4]};`);
                }

                /* knopka.classList.add("anim"); */
                knopka.style.animation = 'none';
                knopka.offsetHeight;
                knopka.style.animation = null;
                //knopka.classList.remove("hidden"); 

                /* knopkaMob.setAttribute('href', A[ind][0]);
                 knopkaMob.setAttribute('target', '_blank');
                 knopkaMob.setAttribute('title', A[ind][2]);
                 knopkaMob.innerHTML = "Купить&nbsp;"+A[ind][2]; */

                /*  if (knopka2('title') != knopka('title')){ }  */               //TEST BUTTON KNOPKA2 

                knopka2.setAttribute('href', A[ind][6]);
                knopka2.setAttribute('target', '_blank');
                knopka2.setAttribute('title', A[ind][7]);
                if ((A[ind][7] === 'VIGOR GK71 SONIC') || (A[ind][7] === 'CLUTCH GM41 LIGHTWEIGHT wireless') || (A[ind][7] === 'VIGOR GK50 ELITE KAILH BLUE') || (A[ind][7] === 'CLUTCH GM31 LIGHTWEIGHT') || (A[ind][7] === 'VIGOR GK20') || (A[ind][7] === 'CLUTCH GM11 BLACK')) {
                    /* knopka.setAttribute('style', `background: red !important;`);*/
                    /*knopka.style.background = 'url(../images/Button_22.svg) !important;';*/
                    document.querySelector('.knopka2').classList.add('kb'); /* adding class kb */

                }
                knopka2.innerHTML = "Купить&nbsp;<br>" + A[ind][7];
                //knopka2.innerHTML = "Купить&nbsp;<br>клавиатуру";
                if (window.innerWidth > 770) {
                    knopka2.setAttribute('style', `left: ${A[ind][8]}; top: ${A[ind][9]};`);
                }

                knopka3.setAttribute('href', A[ind][10]);
                knopka3.setAttribute('target', '_blank');
                knopka3.setAttribute('title', A[ind][11]);
                if ((A[ind][11] === 'VIGOR GK71 SONIC') || (A[ind][11] === 'CLUTCH GM41 LIGHTWEIGHT wireless') || (A[ind][11] === 'VIGOR GK50 ELITE KAILH BLUE') || (A[ind][11] === 'CLUTCH GM31 LIGHTWEIGHT') || (A[ind][11] === 'VIGOR GK20') || (A[ind][11] === 'CLUTCH GM11 BLACK')) {
                    /* knopka.setAttribute('style', `background: red !important;`);*/
                    /*knopka.style.background = 'url(../images/Button_22.svg) !important;';*/
                    document.querySelector('.knopka3').classList.add('kb'); /* adding class kb */

                }
                knopka3.innerHTML = "Купить&nbsp;<br>" + A[ind][11];
                //knopka3.innerHTML = "Купить&nbsp;<br>клавиатуру";
                if (window.innerWidth > 770) {
                    knopka3.setAttribute('style', `left: ${A[ind][12]}; top: ${A[ind][13]};`);
                }

                knopka4.setAttribute('href', A[ind][14]);
                knopka4.setAttribute('target', '_blank');
                knopka4.setAttribute('title', A[ind][15]);
                if ((A[ind][15] === 'VIGOR GK71 SONIC') || (A[ind][15] === 'CLUTCH GM41 LIGHTWEIGHT wireless') || (A[ind][15] === 'VIGOR GK50 ELITE KAILH BLUE') || (A[ind][15] === 'CLUTCH GM31 LIGHTWEIGHT') || (A[ind][15] === 'VIGOR GK20') || (A[ind][15] === 'CLUTCH GM11 BLACK')) {
                    /* knopka.setAttribute('style', `background: red !important;`);*/
                    /*knopka.style.background = 'url(../images/Button_22.svg) !important;';*/
                    document.querySelector('.knopka4').classList.add('kb'); /* adding class kb */

                }
                knopka4.innerHTML = "Купить&nbsp;<br>" + A[ind][15];
                //knopka4.innerHTML = "Купить&nbsp;<br>клавиатуру";
                if (window.innerWidth > 770) {
                    knopka4.setAttribute('style', `left: ${A[ind][16]}; top: ${A[ind][17]};`);
                }

                knopka5.setAttribute('href', A[ind][18]);
                knopka5.setAttribute('target', '_blank');
                knopka5.setAttribute('title', A[ind][19]);
                if ((A[ind][19] === 'VIGOR GK71 SONIC') || (A[ind][19] === 'CLUTCH GM41 LIGHTWEIGHT wireless') || (A[ind][19] === 'VIGOR GK50 ELITE KAILH BLUE') || (A[ind][19] === 'CLUTCH GM31 LIGHTWEIGHT') || (A[ind][19] === 'VIGOR GK20') || (A[ind][19] === 'CLUTCH GM11 BLACK')) {
                    /* knopka.setAttribute('style', `background: red !important;`);*/
                    /*knopka.style.background = 'url(../images/Button_22.svg) !important;';*/
                    document.querySelector('.knopka5').classList.add('kb'); /* adding class kb */

                }
                knopka5.innerHTML = "Купить&nbsp;<br>" + A[ind][19];
                //knopka5.innerHTML = "Купить&nbsp;<br>клавиатуру";
                if (window.innerWidth > 770) {
                    knopka5.setAttribute('style', `left: ${A[ind][20]}; top: ${A[ind][21]};`);
                }



                //removing duplicating bullets on mobile  		
                if (window.innerWidth < 770) {
                    if (knopka2.getAttribute('title', A[ind][7]) === knopka.getAttribute('title', A[ind][2])) {
                        knopka2.setAttribute('style', `display: none;`); knopka3.setAttribute('style', `display: none;`); knopka4.setAttribute('style', `display: none;`); knopka5.setAttribute('style', `display: none;`);
                    } else {
                        knopka2.setAttribute('style', `display: block;`); knopka3.setAttribute('style', `display: block;`); knopka4.setAttribute('style', `display: block;`); knopka5.setAttribute('style', `display: block;`);
                    }
                }

                btDownload.setAttribute('href', item.dataset.image);
                btDownload.setAttribute('download', `wallpaper_${A[ind][1]}`);
                console.log(item.dataset.imagemob);
                if (window.innerWidth < 800) {
                    /*btDownloadMob.setAttribute('href', item.dataset.imagemob);
                    btDownloadMob.setAttribute('download', `wallpaper_${A[ind][5]}`); */
                    btDownload.setAttribute('style', `display: none;`);
                }


                window.scrollBy({
                    // top: room.offsetTop - 25,
                    top: room.getBoundingClientRect().top - 25,
                    behavior: "smooth"
                });

            }

        )
    })

    var swiper = new Swiper(".swiper1", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        // autoHeight: true,
        navigation: {
            nextEl: ".pag-1-next",
            prevEl: ".pag-1-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper2", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: ".pag-2-next",
            prevEl: ".pag-2-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper3", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: ".pag-3-next",
            prevEl: ".pag-3-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper4", {
        slidesPerView: 1,
        spaceBetween: 30,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: ".pag-4-next",
            prevEl: ".pag-4-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper5", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-5-next",
            prevEl: ".pag-5-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper6", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-6-next",
            prevEl: ".pag-6-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper7", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-7-next",
            prevEl: ".pag-7-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper8", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-8-next",
            prevEl: ".pag-8-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper9", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-9-next",
            prevEl: ".pag-9-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper10", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-10-next",
            prevEl: ".pag-10-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper11", {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-11-next",
            prevEl: ".pag-11-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper12", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-12-next",
            prevEl: ".pag-12-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 3,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper13", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-13-next",
            prevEl: ".pag-13-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper14", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-14-next",
            prevEl: ".pag-14-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper15", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-15-next",
            prevEl: ".pag-15-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper16", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-16-next",
            prevEl: ".pag-16-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper17", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-17-next",
            prevEl: ".pag-17-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper18", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-18-next",
            prevEl: ".pag-18-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper19", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-19-next",
            prevEl: ".pag-19-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    var swiper = new Swiper(".swiper20", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".pag-20-next",
            prevEl: ".pag-20-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });


});