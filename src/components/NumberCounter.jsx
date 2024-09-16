
import CountUp from "react-countup";


const NumberCounter = () => {
  return (
    <div className="bg-secondary/50 text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyDelay={0}
            />
          </p>
          <p>Expert Manufacturer</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={20000}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyDelay={0}
            />
          </p>
          <p>Valuable Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyDelay={0}
            />
          </p>
          <p>Our Companies</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={72878}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyDelay={0}
            />
          </p>
          <p>Active Clients</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
