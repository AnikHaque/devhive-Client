import React from 'react';

const QuestionAndAnswer = () => {
    return (
       <div className='bg-gradient-to-r from-primary to-secondary mt-14 py-20'>
        <h1 className='text-center text-3xl font-bold my-12 text-[white]'>Q&A</h1>
         <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-7 gap-4  '>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                What can I sell?
                </div>
                <div className="collapse-content">
                    <p>Be creative! You can offer any service you wish as long as it's legal and complies with our terms. There are over 200 categories you can browse to get ideas.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                How much money can I make?
                </div>
                <div className="collapse-content">
                    <p>It's totally up to you. You can work as much as you want. Many sellers work on Fiverr full time and some keep their 9-5 job while using Fiverr to make extra money.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                How much does it cost
                </div>
                <div className="collapse-content">
                    <p>It's free to join Fiverr. There is no subscription required or fees to list your services. You keep 80% of each transaction.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                How much time will I need to invest?
                </div>
                <div className="collapse-content">
                    <p>It's very flexible. You need to put in some time and effort in the beginning to learn the marketplace and then you can decide for yourself what amount of work you want to do.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                How do I price my service?
                </div>
                <div className="collapse-content">
                    <p>With Gig Packages, you set your pricing anywhere from $5 - $995 and offer three versions of your service at three different prices.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                How do I get paid?
                </div>
                <div className="collapse-content">
                    <p>Once you complete a buyer's order, the money is transferred to your account. No need to chase clients for payments and wait 60 or 90 days for a check.</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default QuestionAndAnswer;