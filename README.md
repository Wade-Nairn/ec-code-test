Installation in structions
1) Clone or download the repo
2) run "npm install" in your terminal to install the dependancies
3) start the app with "yarn start" 
4) app will run on localhost:3000

Adding new color spaces
This is quite a simple task, there are two files you will need to update. 
1) src/config.js 
- add the new color type to the array of COLOR_TYPES. The "kind" value will need to match the "kind" key value returned by the API. The "conversionFunction" value will need to match the name of the conversion function in src/helpers/colorConversions.js colorConversions object.
2) src/helpers/colorConversions.js
- add the conversion function to the colorConversions object. 

If there is a new API endpoint the LIST_URL in src/config.js will also need to be updated.


Heres a quick overview of the approach I took.

Stage 1
Some quick research around the conversion calculation from HSL to RGB. CSS-Tricks.com (https://css-tricks.com/converting-color-spaces-in-javascript/) has an excellent overview of may types of color conversions. I did copy and paste the HSLToRGB fuction. Next was to use create-react-app to initalise a basic react app. 
Then created the Header, Button and ColorTypeConverter components. The helper functions object, the useForm and useColorConversion hooks. 

Stage 2
The first steps for this was to intergrate the API using a new hook (useAxios). I decided to use third party library axios over fetch as fetch is unsupported by IE. I then created ColorList and ColorBlock to represent theis data in the UI. 

Stage 3
Thinking about extending this for the new color type and thinking about all the new possible color types that exist (HEX, CKMY etc.) it made sence to create a config file to which things can be easily added to with out the need to refactor any of the components. It was at this stage I also added a loading spinner animation if the request was being made.

Stage 4
I feel that using a config file makes it easy to extend the system for new color types. It also allows the useAxios hook to be generic and reuseable for and other request with app may need or could be moved to an external shared library with no problems. I also took the same approach to the useForm hook and the Button, LoadingSpinner and Header components.
One thing I would do the improve the app for useability would be to added a copyToClipboard fook that would allow the user to click an icon and copy the RGB code.