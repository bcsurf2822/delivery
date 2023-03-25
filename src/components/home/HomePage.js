import HomeInfo from "./Information";

const HomePage = () => {

  const information = [
    
    {
      title: 'Get Products and Tools',
      description: 'If your in a situation where you need something on demand have one of our drivers go to a store and fetch the item, no size too big or too small, our fleet of drivers will accomadate your every need',
    },
    {
      title: ' Earn by starting a Store',
      description: 'Start your own store, gain ratings and popularity, and start earning money as a store owner',
    },
    {
      title: 'Earn as a Driver',
      description: 'Become a driver and earn money and boost your rating by delivering products safely and on time',
    },
    {
      title: 'Insured',
      description: 'We are fully insured and guarantee that your product will be delivered safely',
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Delivery Service</h1>
      <p className="text-lg mb-8">
        We provide fast and reliable delivery services to our customers and drivers. Browse the features below to learn more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {information.map((card, index) => (
          <HomeInfo key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}
 
export default HomePage;