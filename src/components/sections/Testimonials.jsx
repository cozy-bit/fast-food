import faceOne from "../../assets/images/faces/1.png";
import faceTwo from "../../assets/images/faces/1.png";
import faceThree from "../../assets/images/faces/3.png";
import faceFour from "../../assets/images/faces/4.png";
import faceFive from "../../assets/images/faces/5.png";

function Testimonials() {
  return (
    <section className="w-full bg-[#1d1d1d] text-white">
      <div className="min-h-[620px] flex items-center justify-center px-6">
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="relative w-[400px] h-[400px] shrink-0">
            <div className="absolute inset-[35px] rounded-full border border-dashed border-[#713817]" />
            <div className="absolute inset-[90px] rounded-full border border-dashed border-[#713817]" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-[#ff7625]/10 blur-2xl" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[105px] h-[105px] rounded-full overflow-hidden border-[6px] border-white">
                  <img
                    src={faceTwo}
                  alt="Customer"
                  className="w-[105px] h-[105px]  object-cover"
                />
              </div>
            </div>

            <div className="absolute left-[20px] top-[80px]">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-[5px] border-white">
                <img
                  src={faceOne}
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute right-[45px] top-[25px]">
              <div className="w-[67px] h-[67px] rounded-full overflow-hidden border-[4px] border-white">
                <img
                  src={faceThree}
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute right-[20px] bottom-[75px]">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-[4px] border-white">
                <img
                  src={faceFour}
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute left-[90px] bottom-[15px]">
              <div className="w-[75px] h-[75px] rounded-full overflow-hidden border-[4px] border-white">
                <img
                  src={faceFive}
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-[420px] text-center lg:text-left">
            <div className="text-[#ff7625] text-[70px] leading-[40px] font-serif mb-8">
              &rdquo;
            </div>

            <p className="text-[#bcbcbc] text-[16px] leading-[24px] mb-5">
              Thanks a lot for the prompt service. Really appreciate. Excellent
              taste in Every Bite. Add a joy of best Taste. Foodie Moments.
            </p>

            <h2 className="text-[24px] font-semibold mb-1">Adele A. McNeill</h2>

            <p className="text-[#bcbcbc] text-[12px] uppercase">American</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#302e2e]">
        <div className="max-w-[850px] mx-auto min-h-[160px] px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-[32px] md:text-[36px] font-medium">
            Download Our Menu
          </h2>

          <button
            className="
              w-[155px]
              h-[47px]
              bg-[#ff7625]
              hover:bg-[#ff6410]
              text-white
              font-medium
              text-[14px]
              rounded-[5px]
              transition
              duration-300
              cursor-pointer
            "
          >
            DOWNLOAD
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
