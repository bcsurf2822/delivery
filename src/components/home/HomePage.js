import HomeInfo from "./Information";

const HomePage = () => {

  const information = [
    
    {
      title: 'Get Products and Tools',
      description: 'Get products delivered to your worksite, boat, or office.  No product is too big and no distance is too far, our insured drivers will accomadate your needs when your not able to'
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
      <h1 className="text-4xl font-bold mb-8">Tools 2 U</h1>
      <p className="text-lg mb-8">
        We provide on-Demand delivery service for approved products by app, phone, email, or text.  We offer affordable and insured product delivery.
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