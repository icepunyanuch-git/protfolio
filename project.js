const projects = [

    /* =========================
       WEB
    ========================= */

    {
        title: "Cinnamon Roll Wreath with Apples",

        category: "web",
        categoryName: "WEB",
        assignment: "ASSIGNMENT 3",

        description:
            "A recipe webpage for Cinnamon Roll Wreath with Apples, created using HTML and CSS.",

        link: "project/assignment3/recipe.html"
    },


    {
        title: "Pizza Dip",

        category: "web",
        categoryName: "WEB",
        assignment: "ASSIGNMENT 4",

        description:
            "A recipe webpage for Pizza Dip with styled content using HTML and CSS.",

        link: "project/assignment4/recipe.html"
    },


    {
        title: "Blogger",

        category: "javascript",
        categoryName: "JAVASCRIPT",
        assignment: "ASSIGNMENT 5",

        description:
            "A simple blog webpage created using HTML, CSS and JavaScript.",

        link: "project/assignment5/index.html"
    },


    {
        title: "Register & Login",

        category: "javascript",
        categoryName: "JAVASCRIPT",
        assignment: "ASSIGNMENT 6",

        description:
            "A registration and login system created using HTML, CSS and JavaScript.",

        link: "project/assignment6/register.html"
    },


    {
        title: "Square Game",

        category: "javascript",
        categoryName: "JAVASCRIPT",
        assignment: "ASSIGNMENT 7",

        description:
            "A JavaScript game project created as a web programming assignment.",

        link: "project/assignment7/index.html"
    },


    /* =========================
       OTHERS
       PROJECT
    ========================= */

    {
        title: "OAFISH",

        category: "others",
        subCategory: "project",

        categoryName: "PROJECT",
        assignment: "GROUP PROJECT",

        description:
            "โปรเจกต์การพัฒนาเกมที่นำโมเดล 3D และระบบ Interactive มาประยุกต์ใช้ร่วมกัน โดยออกแบบฉากและองค์ประกอบภายในตู้ปลา พร้อมเตรียมโมเดลสำหรับนำไปพัฒนาต่อใน Unity",

        details: [

            "<strong>การสร้าง 3D Model:</strong> สร้างโมเดลตู้ปลา ปลา และอุปกรณ์ต่าง ๆ ที่อยู่ภายในฉาก",

            "<strong>การเตรียมโมเดล:</strong> จัดเตรียมโมเดลและองค์ประกอบต่าง ๆ เพื่อให้สามารถนำไปใช้งานต่อใน Unity",

            "<strong>Animation:</strong> เตรียม Rig สำหรับโมเดลที่ต้องมีการเคลื่อนไหว",

            "<strong>การนำไปพัฒนาเกม:</strong> นำโมเดล 3D ไปใช้เป็นส่วนหนึ่งของการพัฒนาเกมและ Interactive Environment"

        ],

        images: [
            "fishtank.jpg"
        ]
    },


    {
        title: "Smart Greenhouse",

        category: "others",
        subCategory: "project",

        categoryName: "PROJECT",
        assignment: "MINI DIGITAL TWIN PROJECT",

        description:
            "Mini Project ที่นำโมเดล 3D มาประยุกต์ใช้ร่วมกับ Unity ในแนวคิด Digital Twin เพื่อจำลองระบบ Smart Greenhouse และการควบคุมอุปกรณ์ภายในโรงเรือนจากข้อมูลที่ได้รับจาก Sensor",

        details: [

            "<strong>Temperature:</strong> ตรวจสอบอุณหภูมิและควบคุมพัดลมตามเงื่อนไขที่กำหนด",

            "<strong>Humidity:</strong> ตรวจสอบความชื้นและควบคุม Water Pump เมื่อความชื้นต่ำ",

            "<strong>JSON:</strong> ใช้ JSON ในการรับส่งข้อมูลระหว่าง Sensor และอุปกรณ์จำลอง",

            "<strong>Unity:</strong> ใช้ Unity ในการสร้าง Environment และแสดงสถานะของอุปกรณ์ภายในระบบ",

            "<strong>Digital Twin:</strong> เชื่อมโยงสถานะของโมเดลเสมือนกับข้อมูลของระบบที่จำลองขึ้น"

        ],

        images: [
            "greenhousemodel.jpg",
            "smartgreenhouseunity.png"
        ]
    },


    /* =========================
       OTHERS
       3D MODELING
    ========================= */

    {
        title: "Cafe 3D Modeling",

        category: "others",
        subCategory: "3d-modeling",

        categoryName: "3D MODELING",
        assignment: "3D MODELING PROJECT",

        description:
            "โปรเจกต์การสร้างโมเดล 3D ของร้านคาเฟ่ โดยออกแบบและสร้างทั้งตัวอาคาร พื้นที่โดยรอบ และองค์ประกอบต่าง ๆ ภายในฉาก พร้อมจัด Material และ Lighting เพื่อสร้างภาพ Render ของผลงาน",

        details: [

            "<strong>3D Modeling:</strong> สร้างตัวอาคาร ร้านค้า และองค์ประกอบต่าง ๆ ของฉาก",

            "<strong>Environment:</strong> ออกแบบพื้นที่โดยรอบ เช่น โต๊ะ เก้าอี้ และพื้นที่นั่งด้านนอก",

            "<strong>Material & Lighting:</strong> จัด Material และแสงเพื่อให้เหมาะกับบรรยากาศของฉาก",

            "<strong>Rendering:</strong> จัดมุมกล้องและ Render ผลงานเพื่อใช้ในการนำเสนอ"

        ],

        images: [
            "cafe.jpg"
        ]
    },


    {
        title: "MRT Station",

        category: "others",
        subCategory: "3d-modeling",

        categoryName: "3D MODELING",
        assignment: "3D MODELING PROJECT",

        description:
            "โปรเจกต์การสร้างโมเดล 3D ของสถานี MRT โดยเน้นการสร้างสภาพแวดล้อมภายในสถานีและรายละเอียดของพื้นที่ เช่น พื้น ผนัง ประตู ป้าย และองค์ประกอบต่าง ๆ ภายในสถานี",

        details: [

            "<strong>3D Modeling:</strong> สร้างโครงสร้างและองค์ประกอบต่าง ๆ ภายในสถานี",

            "<strong>Environment Design:</strong> จัดวางพื้นที่และรายละเอียดของสภาพแวดล้อมให้มีความสมจริง",

            "<strong>Material:</strong> กำหนดพื้นผิวและวัสดุให้เหมาะกับองค์ประกอบแต่ละส่วน",

            "<strong>Rendering:</strong> จัดแสงและมุมกล้องเพื่อแสดงผลงานโมเดล"

        ],

        images: [
            "MRT.jpg"
        ]
    }

];


/* =========================
   ELEMENTS
========================= */

const projectList =
    document.getElementById("project-list");

const categories =
    document.querySelectorAll(".category");


/* =========================
   SHOW PROJECTS
========================= */

function showProjects(category) {

    projectList.innerHTML = "";


    let filteredProjects;


    /* ALL */

    if (category === "all") {

        filteredProjects = projects;

    }


    /* WEB */

    else if (category === "web") {

        filteredProjects = projects.filter(
            project => project.category === "web"
        );

    }

    /* JAVASCRIPT */

    else if (category === "javascript") {

        filteredProjects = projects.filter(
            project => project.category === "javascript"
        );

    }

    /* OTHERS */

    else if (category === "others") {

        filteredProjects = projects.filter(
            project => project.category === "others"
        );

    }

    /* PROJECT */
    else if (category === "project") {

        filteredProjects = projects.filter(
            project => project.subCategory === "project"
        );

    }

    /* 3D MODELING */
    else if (category === "3d-modeling") {

        filteredProjects = projects.filter(
            project => project.subCategory === "3d-modeling"
        );

    }


    /* =========================
       CREATE PROJECT CARDS
    ========================= */

    filteredProjects.forEach(project => {

        const card =
            document.createElement("article");

        card.className = `project-card ${project.category}`;

        if (project.title === "Smart Greenhouse") {
            card.classList.add("digital-twin");
        }

        /* =========================
           IMAGES
        ========================= */

        let imageHTML = "";


        if (project.images) {

            imageHTML = `
                <div class="project-images">

                    ${project.images.map(image => `
                        <img
                            src="${image}"
                            alt="${project.title}"
                        >
                    `).join("")}

                </div>
            `;

        }


        /* =========================
           DETAILS
        ========================= */

        let detailsHTML = "";


        if (project.details) {

            detailsHTML = `
                <div class="project-details">

                    ${project.details.map(detail => `
                        <p>• ${detail}</p>
                    `).join("")}

                </div>
            `;

        }


        /* =========================
           VIEW PROJECT
        ========================= */

        let linkHTML = "";


        if (project.link) {

            linkHTML = `
                <a
                    href="${project.link}"
                    class="view-project"
                >
                    VIEW PROJECT →
                </a>
            `;

        }


        /* =========================
           CARD
        ========================= */

        card.innerHTML = `

            ${imageHTML}

            <div class="project-info">

                <p class="project-category">
                    ${project.categoryName}
                </p>

                <p class="project-assignment">
                    ${project.assignment}
                </p>

                <h2 class="project-name">
                    ${project.title}
                </h2>

                <p class="project-description">
                    ${project.description}
                </p>

                ${detailsHTML}

                ${linkHTML}

            </div>

        `;


        projectList.appendChild(card);

    });

}


/* =========================
   CATEGORY BUTTONS
========================= */

categories.forEach(button => {

    button.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });


        button.classList.add("active");


        showProjects(
            button.dataset.category
        );

    });

});


/* =========================
   SHOW ALL FIRST
========================= */

showProjects("all");