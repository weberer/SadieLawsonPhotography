import emoji from './emoji';

const _IMAGE_DIR = '../resources/photos/testimonials/';
    
export default [
    {
        id: 0,
        alt: 'Sadie is such a sweet girl!',
        image: _IMAGE_DIR + 'witch.jpg',
        text: 'Sadie is such a sweet girl! She makes you feel so comfortable and welcomed! I&apos;d recommend anyone to her!'
    },
    {
        id: 1,
        alt: 'I&apos;m Adorable!',
        image: _IMAGE_DIR + 'asher.jpg',
        text: 'Auntie Sadie is the best. She says I&apos;m a good boy during photo shoots, even when I don&apos;t want ' +
            'to look at the camera. She also gave me a bunch of treats! I love you Auntie Sadie!' +
            emoji.heart + emoji.dog + emoji.heart
    },
    {
        id: 2,
        alt: 'Sadie is amazing',
        image: _IMAGE_DIR + 'couple.jpg',
        text: 'Sadie has been my best friend for years and is an amazing photographer. We have had bad experiences with ' +
            'photographers in the past, and are very picky about who we work with. Sadie has taken some of my favorite ' +
            'photos of all time. She is the real deal.'
    },
    {
        id: 3,
        alt: 'Photos with sadie was a great experience',
        image: _IMAGE_DIR + 'friends.jpg',
        text: 'Photos with Sadie was great experience ' + emoji.grinningFaceWithSmilingEyes + ' She was very patient ' +
            'and kind the whole time. I absolutely love the end results.'
    },
    {
        id: 4,
        alt: 'Sadie was a joy to work with',
        image: _IMAGE_DIR + 'wedding_flowers.jpg',
        text:'Sadie was a joy to work with when she photographed our wedding day! She created an easy going atmosphere ' +
            'filled with laughs that allowed her to capture our genuine selves. Her work is amazing, and I highly ' +
            'recommend her services to anyone.'

    }
]