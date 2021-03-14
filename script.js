const testimonialContainer = document.querySelector(".testimonials");
const testimonialEl = document.querySelector(".testimonial-card");
const testimonialItem = document.querySelector(".testimonial-item");
const userName = document.querySelector(".userName");
const testimonialTitle = document.querySelector(".testimonial-title");
const testimonialText = document.querySelector(".testimonial-text");
const userImage = document.querySelector(".user-image");
const testimonials = [
    {
        name: "Jill Willamson",
        photo: "./sognare-images/jill.jpg",
        role: "Student",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit officiis voluptates earum odit nostrum."
    },

    {
        name: "Serenity Curtis",
        photo: "./sognare-images/serenity.jpg",
        role: "Designer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit officiis voluptates earum odit nostrum. Lorem ipsum dolor."
    },

    {
        name: "Joe Coleman",
        photo: "./sognare-images/joe.jpg",
        role: "Artist",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit officiis voluptates earum odit nostrum. Lorem ipsum sit amet consectetur."
    },

    {
        name: "Lena Baker",
        photo: "./sognare-images/lena.jpg",
        role: "Computer Engineer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, suscipit officiis voluptates earum odit nostrum. Lorem."
    }
];
let index = 1;
function changeTheTestimonials() {
    const {name, photo, role, text} = testimonials[index];
    testimonialText.innerHTML = text;
    userName.innerHTML = name;
    userImage.src = photo;
    testimonialTitle.innerHTML = role;

    index++;
    if(index > testimonials.length - 1) {
        index = 0;
    }
}

setInterval(changeTheTestimonials, 6000);

