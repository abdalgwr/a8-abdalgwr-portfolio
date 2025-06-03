


function TopicsPage() {
    return (
       <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#web-servers">Web Servers </a>
                <a href="#frontend-design">Frontend Design </a>
                <a href="#image-optimization">Optimized Images </a>
                <a href="#favicons">Favicons</a>
                <a href="#CSS">CSS</a>
            </nav>
            <article id="web-servers">
                <h3>Web Servers</h3>
                <p>An <strong>index</strong> is the designated default page on the web application, and it refers to the root directory. The server uses the URL to look for the index directory in order to display the home page. The user is then able to interact with the website. The index.html file contains different elements of HTML, such as the title tag, the head tag, and the body tag. The body tag contains the main content of the website that the user sees, the body tag includes headings and paragraphs. The <strong>Apache</strong> web server uses the default name index.html. When it comes to other servers, such as <strong>Microsoft's</strong>.NET platform, default.html is another option for a homepage.</p>
                <p>The <strong>Network</strong> tab displays the HTTP requests made to process the webpage. When viewed from a <strong>web server</strong>, the status code will be displayed. This code indicates if each HTTP request was successfully completed or not. The Network tab on a web server will also display request and response headers. These provide details about the URL request and the server response, which include type, cache details, and last modified date. Additionally, the size of each resource is displayed, as well as the initiator of each file, whether it's an HTML document, a stylesheet, or a script. When viewed on a <strong>local computer</strong>, the file names are displayed as well as their paths. There are no HTTP requests shown or status codes for the main.css and main.js files.</p>
                <p>The <strong>favicon.ico</strong> file has a status of 200 because it was successfully loaded by the browser from the server. This means that the request was successful, and the server was able to fulfill it with no errors. The <strong>main.css</strong> and <strong>main.js</strong> files do not exist because the browser was unable to load the files from the server because the file paths are not on the local computer. These files have a status code of 404.</p>
                <p>The following URL is the link to my web file: </p><p><strong>https://web.engr.oregonstate.edu/~abdalgwr/</strong></p>
                <p>The <strong>scheme</strong> in this example is https://. This identifies the protocol needed to request the source. The <strong>subdomain</strong> is web.engr. The <strong>host domain</strong> is oregonstate.edu, this is the domain name that indicates the location of the website. The <strong>path to page</strong> /~abdalgwr/a1-abdalgwr/ also specifies the location of the file inside the folder structure.</p>
            </article>
            <article id="frontend-design">
                <h3>Frontend Design</h3>
                    <p><strong>Frontend design</strong> is a concept that deals with creating the ideal experience for users. It consists of the visual design of the webpage, the graphical user interface, and the interactive element of the page. Consistent color schemes, typeface and typography schemes, schemes for photos, icons, and illustrations, as well as logical navigation methods, are all necessary for the visual design. The quality of a user's experience dealing with a system or product, be it a desktop application, an online application, or any other user-operated device, is measured by its usability.</p>
                    <p><strong>Usability</strong> affects the user experience with a webpage, depending on multiple factors. A usable website is:</p>
                    <dl>
                        <dt>Effective</dt>
                        <dd>How precisely and fully the task, experience, or objectives are accomplished.</dd>
                        <dt>Efficient</dt>
                        <dd>How quickly this task can be finished.</dd>
                        <dt>Easy to navigate</dt>
                        <dd>How well the website facilitates learning during both the initial setup and ongoing use throughout the course of its lifetime.</dd>
                        <dt>Error-free</dt>
                        <dd>How well the solution can assist the user recover from mistakes that do occur and prevent errors from happening.</dd>
                        <dt>Enjoyable</dt>
                        <dd>How successfully the user interface engages them in the engagement, as well as how enjoyable and fulfilling it is to use.</dd>
                    </dl>
                        <p><strong>Page layout tags</strong> structure the appearance of a website by breaking up text on the page using multiple tags such as a <strong>header</strong>, a <strong>main</strong>, and a <strong>section</strong> element. Content is divided using these and a few other components. Typically, they will divide their text into blocks that are separated by lines before and after. First off, the <strong>header</strong> element defines the main banner of a website and usually includes the name and the marketing slogan. The <strong>nav</strong> element is used to contain blocks of navigation links to take users to other pages. Links can include the main menu, contact, tools, search, and locations. The <strong>main</strong> element refers to the primary section of the page that includes the main content. The <strong>section</strong> is used to group content based on themes. A group of text that belongs together but does not fit with any other content can be sectioned off using this element. The <strong>article</strong> element is usually used inside a section tag and refers to a specified topic with a second-level headline. The <strong>footer</strong> marks the end of the website and usually includes legal information as well as contact links. Lastly, the <strong>div</strong> element is a placeholder for dynamic content.</p>
                
                        <p>An <strong>anchor</strong> is used to create hyperlinks from one page to another. The text between the 'a' tags refers to the link displayed. The 'href' attribute specifies the path the link takes the user to.</p>
                        <ol>
                            <li><strong>External anchor:</strong> links to a URL that is outside the current website.</li>
                            <li><strong>Internal anchor:</strong> links between two text items on the same page using IDs.</li>
                            <li><strong>Page-to-page:</strong> links from one page to another, using distinct buttons to take the user to external sites and pages. This is done by using navigation and a set of anchors to create a global navigation block to link to other pages.</li>
                        </ol>
                    </article>
                    <article id="image-optimization">
                        <h3>Optimized Images</h3>
                        <p>There are six major specifications for optimized images for the web. First, having a <strong>descriptive file name</strong> is crucial in order to improve search engine optimization (SEO). The file name should include who, what, where, and when as much as possible. The description should ideally be detailed but brief. For instance, an image of a crocheted olive branch with two hanging olives can be named crochet-olive-branch.jpg. When users visit the website, search engine bots will be able to categorize the images for them using related photographs. Second, a <strong>small file size</strong> is important to achieve the fastest load time. Third, having <strong>exact dimensions</strong> through cropping and reducing image size helps to match the proportions of the area on the website. Serving a large picture that will only fit in a 600px block will cause it to load extremely slowly. Fourth is choosing the <strong>correct file format</strong> for the images (different types are discussed below). Fifth is <strong>reduced resolution</strong>. Images should have an appropriate resolution, typically 72 PPI, for web display. Higher resolutions are unnecessary and may slow down page loading. Lastly, number six is <strong>color mode</strong>, which is essential for image optimization because it directly impacts the image's file size and its loading time. </p>
                        <p>The file format used for online pictures is determined by the content and needs. The <strong>JPG</strong> format is commonly used for pictures and complex images. Because of its effective compression, JPG is a lossy format that is suitable for photos. <strong>PNG</strong>, on the other hand, is favored for images with transparency or intricate graphics due to its lossless nature, which preserves image quality. <strong>PNG</strong> is a popular format for line art. Line-art graphics, such as logos and icons, are typically <strong>GIF</strong> and, sometimes, 8-bit PNG. True transparency requires PNG 24-bit graphics. PNG files are best suited for pictures with a restricted color palette and high contrast. This format ensures that line art keeps its clarity and quality while being shown on the web. <strong>SVG</strong> is a format that is ideal for line drawings and other visuals with well defined forms. It is ideal for logos, icons, graphics, and any other material that requires scalability and clean edges. <strong>WebP</strong> is an image format that is intended primarily for photographic pictures and supports both lossy and lossless compression. WebP files are suited for online use since they have small file sizes while keeping acceptable picture quality.</p>
                    </article>
                    <article id="favicons">
                        <h3>Favicons</h3>
                        <p><strong>Favicons</strong>, also known as "favorite icons," are little graphics connected with websites that perform a variety of activities on browsers and mobile devices. They may be stored in a variety of formats, the most common of which are ICO, SVG, and PNG. Favicons are designed to perform effectively on a variety of platforms, including browser tabs and touch displays. To maintain compatibility with different browsers and devices, websites generally publish numerous favicon files in various formats. Favicons appear prominently on browser tabs, act as recognized symbols for bookmarks and favorites, and may be utilized as device home screen icons. They may also appear in search engine results, increasing the visual attractiveness and visibility of websites. </p>
                    </article>
                    <article id="CSS">
                        <h3>Cascading Stylesheets (CSS)</h3>
                        <p><strong>Cascading stylesheets</strong> are essential to websites and applications for a variety of reasons. They promote efficiency and modularity by ensuring design consistency across several pages and components, separating presentation from content, and separating presentation from content. Stylesheets provide responsive design for a variety of platforms and increase accessibility for disabled people. They help to improve speed, facilitate user customization, and simplify maintenance and upgrades. Stylesheets also help with internationalization, branding, debugging, and testing by offering a central area for defining and maintaining design components, making them an essential component of successful and efficient digital design and development.</p>
                        <p>There are <strong>five</strong> primary methods for incorporating styles into websites and apps. External stylesheets, which are independent CSS files linked to HTML documents, promote content separation and allow for easy style maintenance and reuse. Internal styles (embedded CSS) are useful for applying distinct styles to certain portions of a page, while inline styles (specified within HTML elements) provide speedy individual element decorating. CSS pre-processors such as SASS and LESS improve maintainability by utilizing variables and functions. CSS-in-JS, a component-based approach technique, wraps styles within components, ensuring modularity and eliminating style leakage. The technique to choose is determined by the project's needs, with external stylesheets often used for global consistency and CSS-in-JS better suited for complicated, modular systems.</p>
                    </article>
                    </>
    );
}
export default TopicsPage;