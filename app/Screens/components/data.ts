
  export interface OnboardingData {
    id: number;
    image?: HTMLImageElement;
    excerpt: string;
    text: string;
    textColor: string;
    backgroundColor: string;
  }
  
  const data: OnboardingData[] = [
    {
      id: 1,
      image: require('../../assests/slide1.png'),
      text: 'Courier Service at your home',
      excerpt:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      textColor: '#3A3A3A',
      backgroundColor: '#2B2D63',
    },
    {
      id: 2,
      image: require('../../assests/slide2.png'),
      text: 'Car Services & Expert nearby you',
      excerpt:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      textColor: '#3A3A3A',
      backgroundColor: '#FE8E42',
    },
    {
      id: 3,
      image: require('../../assests/slide3.png'), 
      text: 'Professional House Keeping',
      excerpt:' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
      textColor: '#F15937',
      backgroundColor: '#6A8BED',
    },
  ];
  
  export default data;