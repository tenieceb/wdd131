


const currentyear = document.querySelector("#currentyear");
const lastupdated = document.querySelector("#lastModified");
const today = new Date();
currentyear.innerHTML =`${today.getFullYear()}`;
let lastModif = new Date(document.lastModified);

const lastModifFormatted = lastModif.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
}
)

lastupdated.innerHTML = `Last Modified:  ${lastModifFormatted} ${lastModif.toLocaleTimeString()}`;
const santanames = [
    {
      santaName: "Santa Claus",
      location: "America",
      imageSrc: "project/images/santaportrait.webp",
      attribution: "Photo by cottonbro studio: https://www.pexels.com/photo/man-wearing-santa-claus-costume-3149857/",
      story:"Santa Claus brings gifts to good children over the night of Christmas Eve, December 24th. Some of these gifts are toys made by his elves. He rides a sleigh pulled by flying reindeer. Their names are Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, and Blitzen. Sometimes he needs the help of an extra special reindeer named Rudolph. Rudolph has a brightly glowing red nose. He has a naughty and nice list and checks it to make sure that it's correct. ",
      imageSrc2: "project/images/santasleigh.webp"
    },
    {
        santaName: "Saint Nicholas",
        location: "Turkey",
        imageSrc: "project/images/saintnicholas.webp",
        attribution: "Photo by Ahmet Çiftçi: https://www.pexels.com/photo/mosaic-of-saint-nicholas-on-a-church-26939042/",
        story: "Saint Nicholas is generally considered the beginnings of Santa Claus. Nicholas (years 270-343) lived his life devoted to Christianity. He was a bishop that was known for giving generously to the poor. One such occasion was paying the dowries of three Christian women so they would be able to be married. His sarcophogus is in the St. Nicholas Church in Myra. Before the Reformation, on the evening of December 6 (his name day), children were given gifts in his honor. Martin Luther encouraged the tradition of gift giving but on December 24 and December 25. He wanted the focus to be on Jesus Christ instead of saints. As we know, Saint Nicholas is still known as the gift giver. ",
        imageSrc2: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jaroslav_%C4%8Cerm%C3%A1k_%281831_-_1878%29_-_Sv._Mikul%C3%A1%C5%A1_%28cropped%29.jpg",
    },    
    {
        santaName: "Father Christmas",
        location: "England",
        imageSrc: "project/images/fatherchristmas.webp",
        attribution: "",
        story: "Father Christmas was depicted as a very tall man in a green fur lined robe as far back as the 16th century. He embodied Chistmas cheer, peace, joy, and fun. He appears in A Christmas Carol as the Ghost of Christmas Present and brings Scrooge through London on Christmas morning.",
        imageSrc2: "https://blogs.loc.gov/folklife/files/2018/12/Three-father-christmas-green.jpg",
      },
    {
        santaName: "Odin",
        location: "Germanic",
        imageSrc: "project/images/odin.webp",
        attribution: "",
        story: "During a midwinter event, called Yule, Odin would fly through the sky on Sleipnir, an eight footed horse type of beast. He would visit his worshippers and bring them gifts. The theory is that his depiction of having a long white beard and his blue robe, contributed to what the current depiction is of Santa Claus, a white bearded, red clothed gift bringer.",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/1/11/Odin_riding_Sleipnir.jpg"
    }
]

const reasonForSeason = [
    {
    reason: "Jesus Christ",
    location: "Bethlehem",
    imageSrc: "project/images/nativity.webp",
    attribution: "Photo by <a href=",//unsplash.com/@walterch?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Walter Chávez</a> on <a href="https://unsplash.com/photos/the-nativity-decor-TEFSPAaoKlA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>", 
    story: "A very long time ago, a man, Joseph, and a woman, Mary were going to be married. An angel came to Mary and told her that she would give birth to the Son of God,the Savior, and His name would be Jesus. Mary and Joseph had to go to Bethlehem for the census and to pay taxes. When they arrived there was no room for them to privately have the baby. They stayed in a stable, and Jesus was born. A new star appeared over them in the sky. In nearby fields, shepherds were visited by a host of angels and were told that the Savior was born and they should find him, to worship him. Wise men far away were looking to the stars for signs that the Son of God was born. When the new star appeared they knew it was Him. They traveled toward the star and found Jesus. They gifted Him gold, frankincense, and myrrh. An angel visited Joseph, warning him that King Herod was searching for Jesus to kill him. Mary, Joseph, and Jesus fled to Egypt. When it was safe, they returned to Nazareth. Jesus grew up knowing He was the Son of God and had a sacred duty to teach about Heavenly Father and His Plan for us to be with Him again in heaven.",
    imageSrc2: "project/images/santakneelingtojesus.webp",
    attribution2: "painting by Gaye Frances Willard ",
    }
]



