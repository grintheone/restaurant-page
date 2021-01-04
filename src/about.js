// function to show the about page
function showAbout() {
    document.body.setAttribute('id', 'background-about');
    document.getElementById('menu-about').style.borderBottom = '3px solid #04A777';
    document.getElementById('link-container').remove();

    const content = document.getElementById('content');
    
    const chefContainer = document.createElement('div');
    // chef's photo
    const chefPhoto = document.createElement('div');
    chefPhoto.setAttribute('id', 'chef-photo');

    // text about chef
    const chefInfo = document.createElement('div');
    chefInfo.setAttribute('id', 'chef-info');
    const header = document.createElement('h2');
    header.textContent = 'MEET OUR CHEF';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Nunc commodo vel purus quis rutrum. Morbi tempor quam sem, ' +
    'id euismod magna sollicitudin et. Duis pulvinar vestibulum felis sit amet pellentesque. ' +
    'Integer viverra sem sit amet dui pretium fringilla. Nulla ornare est eu libero aliquam pretium. ' +
    'Nam nec metus ac est porttitor efficitur id id ipsum. Suspendisse scelerisque dui at neque vulputate ' +
    'imperdiet. Vestibulum congue porttitor augue at tincidunt. Quisque pharetra dui mi, ut condimentum ' +
    'nibh varius ac. Sed ut quam a nibh accumsan tincidunt. Suspendisse laoreet dictum nulla, ut hendrerit nisl. ' +
    'In euismod ut tellus nec imperdiet. Etiam sit amet est vel ante pellentesque rutrum vel at arcu. Lorem ipsum ' +
    'dolor sit amet, consectetur adipiscing elit. Etiam ipsum augue, fermentum vel ornare eu, egestas ac lacus.'
    chefContainer.appendChild(chefInfo)
    chefContainer.appendChild(chefPhoto)
    chefContainer.setAttribute('id', 'chef-container');


    // contact links 
    const message = document.createElement('h2');
    message.textContent = 'CONTACTS US HERE'
    

    const linksContainer = document.createElement('div');
    linksContainer.setAttribute('id', 'links-container');
    
    createLink('https://www.instagram.com/', linksContainer, 'insta-link');
    createLink('https://www.facebook.com/', linksContainer, 'facebook-link');
    createLink('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=target@email.com', linksContainer, 'email-link');
    createLink('https://twitter.com/', linksContainer, 'twitter-link');

    // review 
    const reviewContainer = document.createElement('div');
    reviewContainer.setAttribute('id', 'review-container');
    const review = document.createElement('h2');
    review.textContent = 'OR LEAVE US A REVIEW';
    const reviewBtn = document.createElement('button');
    reviewBtn.textContent = 'LEAVE A REVIEW'

    reviewContainer.appendChild(review);
    reviewContainer.appendChild(reviewBtn);


    chefInfo.appendChild(header);
    chefInfo.appendChild(paragraph)
    content.appendChild(chefContainer);
    content.appendChild(message);
    content.appendChild(linksContainer);
    content.appendChild(reviewContainer);
}

function createLink(url, container, id) {
    const elem = document.createElement('div');
    const link = document.createElement('a');
    link.setAttribute('class', 'link');
    elem.setAttribute('id', id);
    link.href = url
    link.appendChild(elem)
    container.appendChild(link)
}

export {showAbout, createLink};