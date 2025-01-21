- anchor tag reloads the whole page which means destroying the current DOM and creating again a new one , instead we use Link tag which is provided to us by react router dom -> it doesnt reloads the page fully only updates that part of UI which has changed.
- Navlink is same as Link tag but it gives extra functionality like isActive which helps us to make show visually which page we are currently viewing. it compares with the Url
- sticky class for creating a sticky like feature jisme nav bar atka rehta hai thodi der scroll krne tk fir uske baad hat jaata hai...--->
happens it stays fixed till the parent element is on the screen , when the parent element goes out of screen the sticky element also goes out 
- Layout vaala file is being used as base and when we use Outlet then everything else will remain same except outlet
- giving us feel of Multi page application even though it is a single page application.on the specific button click or URL , specific components are shown.