# Material UI

## General
Please, create an application with the following structure of elements:

![](./public//images/taskScreenshots/main-top.png )
 
  
![](./public//images/taskScreenshots/main-bottom.png )


## 1. Header
for screen size 1200px and more should contain title, menu and action buttons as shown below:

![](./public//images/taskScreenshots/header-lg.png )

for [900px - 1200px) is similar, but space between action buttons is smaller:
![](./public//images/taskScreenshots/header-md.png )

for less than 900px menu should hide and be avaliable via **menu** button, and action buttons are not in the header and title should appear in the center:
<div><img src="./public//images/taskScreenshots/header-sm.png" width="650"><div>



## 2. Menu
Menu should have elements as shown below for screens 900 px and bigger. Stories item should have submenu
<div><img src="./public//images/taskScreenshots/menu-desktop.gif" width="300"><div>

for less than 900px menu should open on click on **menu** button . Stories item should have submenu (use Accordion component for that):
<div><img src="./public//images/taskScreenshots/menu-mobile.gif" width="450"><div>

## 3. Banner
Banner should contain 
 - image (you can use any pictue). Change image size accordingly to the size of the screen (you can choose size values)
 - 3 text elements with different sizes (use Typography component for this),
 - button **Donate** - customize it so that it looks like shown below (size, sharp edges, change text color on hover)
<div><img src="./public//images/taskScreenshots/banner.gif" width="700"><div>

for screen size less than 600px image and text elements should be aligned vertically:
<div><img src="./public//images/taskScreenshots/banner-small.png" width="400"><div>

## 4. Content
Dilplay elements like on the screen below for screens 900 px and bigger:
(elements should be placed in 3 cfolumns)
<div><img src="./public//images/taskScreenshots/content.png" width="800"><div>
You can use any pictures you like.
<br/><br/>
for [600px - 900px) elements should be placed in two columns:
<div><img src="./public//images/taskScreenshots/content-sm.png" width="500"><div>
<br/><br/>
for less than 600px screen size elements should be placed in one column:
<div><img src="./public//images/taskScreenshots/content-xs.png" width="250"><div>

On each item should be a caption and *faforite* button customized as ahown below:
<div><img src="./public//images/taskScreenshots/image-list-item.gif" width="250"><div>

## 5. Footer
Sould consist of 3 sections: ABOUT US, INFORMATION, MY ACCOUNT.
for screen size 1200px and more it should look like this:
<div><img src="./public//images/taskScreenshots/footer.png" width="800"><div>
<br/>
for [600px - 1200px):
<div><img src="./public//images/taskScreenshots/footer-sm-md.png" width="500"><div>
<br/>
for less than 600px:
<div><img src="./public//images/taskScreenshots/footer-xs.png" width="300"><div>
<br/>

## 6. Action icons

for screen size 900 and more - explained in section **Header**
<br/>
for less than 900px action items should be placed at the bottom of the screen:
<div><img src="./public//images/taskScreenshots/action-buttons.png" width="550"><div>
<br /><br />

## 7. Customization
At least one component should be overriden (customized) at theme level.  
Palette should be overriden (customized) at theme level.  
Use styles/index.js for the theme customization.  
<br /><br />    
    
## *Note*
*Not all of the requirements are tested by unit tests, but still, try to implement all of them.*<br />
*If you have ideas what else would be good to add, you are welcome to do it in addition to existing requirements.* <br />
*You can use the colors that are defined in styles/index.js. Also, you can change values of the colors to your liking. But please, not use the default color scheme*
