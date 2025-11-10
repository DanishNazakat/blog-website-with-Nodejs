// blog section
function opendiv() {
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display = "flex";
    document.body.style.overflow = "hidden";

}
function closediv() {
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display = "none";
    document.body.style.overflow = "scroll";
}


// blog Content
let createBlog = document.getElementById('blogs');

createBlog.addEventListener('click', async () => {
    try {
        let tittle = document.getElementById('blogTittleinp').value;
        let authorName = document.getElementById('authorNameinp').value;
        let blogContent = document.getElementById('blogContent').value;


        console.log(tittle, authorName, blogContent);
        

        let res = await axios.post("http://localhost:3000/api/createBlog",{
            tittle,
            authorName,
            blogContent
        })
        console.log("Response from server" + res.data)
        alert("blog successfuly created");
        let blogform = document.getElementById('blogform');
    blogform.style.display = "none";
    document.body.style.overflow = "scroll";
    } catch (err) {
        console.log(err)
    }

})  