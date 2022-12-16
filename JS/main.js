window.addEventListener("load", function(){

    let chooseVpnParent = document.getElementById("choose_vpn"); 
    let fasterDeviceParent = document.getElementById("clean_up");
    let easyInstallParent = document.getElementById("fast_setup");

    let arr = [
        {
            id: 0,
            isRight: false,
            isIconHeader: true,
            title: "Choose a VPN for true online privacy",
            description: "Block ISPs from tracking your activity, stop geo-restrictions from content providers, and ensure public Wi-Fi is safe with Avast’s Virtual Private Network (VPN).",
            buttonTitle: "DISCOVER VPN",
            buttonIcon: "../IMG/arrow_right_alt_FILL0_wght100_GRAD0_opsz48.svg",
            image: "../IMG/vpn-devices.webp",
            backgroundImage: "",
            icon: "../IMG/product-icon-32x32-vpn_white.svg",
            iconTxt: "AVAST SECURELINE VPN",
            parent: chooseVpnParent
        },
        {
            id: 1,
            isRight: true,
            isIconHeader: true,
            title: "Enjoy more storage space and a faster device",
            description: "Reclaim gigabytes of storage space and get your device working like new by removing junk like leftover files, bloatware, and unwanted programs. Avast Cleanup also updates your software automatically, hibernates resource-draining apps, and more.",
            buttonTitle: "DISCOVER CLEANUP",
            buttonIcon: "../IMG/arrow_right_alt_FILL0_wght100_GRAD0_opsz48.svg",
            image: "../IMG/cleanup@2x.webp",
            backgroundImage: "../IMG/bg.svg",
            icon: "../IMG/product-icon-32x32-cleanup_white.svg",
            iconTxt: "AVAST CLEANUP PREMIUM",
            parent: fasterDeviceParent
        },
        {
            id: 2,
            isRight: false,
            isIconHeader: false,
            title: "It’s so easy to install — switching to Avast takes seconds",
            description: "You can start using Avast’s award-winning antivirus immediately. It’s quick and easy to install, and gives you all the protection you need to live your online life securely. And it’s totally free — so give it a try right now.",
            buttonTitle: "FREE DOWNLOAD",
            buttonIcon: "../IMG/icons8-windows-10-50.png",
            image: "../IMG/install@2x.webp",
            backgroundImage: "",
            icon: "",
            iconTxt: "",
            parent: easyInstallParent
        }
    ]

    for (let i = 0; i < arr.length; i++) {        
        renderSection(arr[i]);
    }
})

function renderSection(obj) {

    const {title, description, buttonTitle,
            image, backgroundImage, icon,
            iconTxt, isRight, isIconHeader,
            buttonIcon, parent} = obj;

// Wrapper Content

    const contentWrapper = document.createElement("div");
    const contentInfo = document.createElement("div");
    const contentImage = document.createElement("div");
    
// Info Content

    const contentInfoHeader = document.createElement("a");
    const contentIcon = document.createElement("div");
    const iconImage = document.createElement("img");
    const contentIconTxt = document.createElement("p");
    const contentTitle = document.createElement("h2");
    const contentDescription = document.createElement("p");
    const contentBtn = document.createElement("div");
    const contentBtnTxt = document.createElement("a");
    const contentBtnImage = document.createElement("img");

// Image Content

    const img = document.createElement("img");
    const bgImage = document.createElement("img"); 

// Child & Parents

    if(isIconHeader == true){
        contentInfo.appendChild(contentInfoHeader);
    }
    
    contentInfo.appendChild(contentTitle);
    contentInfo.appendChild(contentDescription);
    contentInfo.appendChild(contentBtn);

    contentBtn.appendChild(contentBtnTxt);
    contentBtn.appendChild(contentBtnImage);

    contentWrapper.appendChild(contentImage);
    contentWrapper.appendChild(contentInfo);

    contentInfoHeader.appendChild(contentIcon);
    contentInfoHeader.appendChild(contentIconTxt);
    contentIcon.appendChild(iconImage);

    contentImage.appendChild(img);
    if(isRight == true){
        contentWrapper.appendChild(bgImage);
    }

// Attributes & Txt

    contentIconTxt.textContent = iconTxt;
    contentTitle.textContent = title;
    contentDescription.textContent = description;
    contentBtnTxt.textContent = buttonTitle;

    img.setAttribute("src", image);
    bgImage.setAttribute("src", backgroundImage);
    iconImage.setAttribute("src", icon);
    contentBtnImage.setAttribute("src", buttonIcon);
    
    
    if(isRight == true){
        contentWrapper.classList.add("reversed");
        contentWrapper.classList.add("bg-image");
    }

    if(isIconHeader == false){
        contentWrapper.classList.add("gray");
        contentImage.classList.add("little-image");   
        contentBtn.classList.add("reversed");
    }

// Class List

    contentWrapper.classList.add("content-wrapper");
    contentImage.classList.add("content-image");
    contentInfo.classList.add("content-info");
    contentInfoHeader.classList.add("content-info-header");
    contentIcon.classList.add("content-icon");
    contentDescription.classList.add("content-description");
    contentBtn.classList.add("content-btn");
    bgImage.classList.add("section-bg_image");

    obj.parent.appendChild(contentWrapper);
}