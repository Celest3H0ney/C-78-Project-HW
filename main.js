var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/CMsGcqBS/Image007.jpg", "https://i.postimg.cc/02ZCywPc/DSC00794.jpg" , "https://i.postimg.cc/br5Nmg1m/20151031-190003.jpg", "https://i.postimg.cc/4yjs6dTM/20151101-000300.jpg", "https://i.postimg.cc/G364J3zd/IMG-20150101-113001.jpg", "https://i.postimg.cc/g0MJwGn9/Image003.jpg"];
var names = ["Family Book","Mani", "Anish VS", "Pranav Anish", "Nandhana Anish", "Kavitha Thamarassery","Sobha Mani"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
