import React from 'react';
import Button from '../shared/Button';
import DonateButton from '../shared/DonateButton';
import StarDecoration from '../shared/decorations/StarDecoration';
import PinkBlobDecoration from '../shared/decorations/PinkBlobDecoration';
import FundraisingGoal from './FundraisingGoal';

export default function Contribute() {
  return (
    <section id="contribuir" className="relative w-full px-4 py-10 md:px-8 md:py-20 lg:px-16 lg:py-24">
      {/* Max-width wrapper to contain decorative elements on wide screens */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-16" style={{ gap: '4em' }}>

          {/* Star decoration - top-left, contained within */}
          <StarDecoration
              className="absolute top-[-40px] left-[20px] z-0"
              size="lg"
            />
          {/* LEFT/TOP: How to Help - 2/3 width */}
          <div className="flex-[2] relative bg-[#BEC864] rounded-[20px] p-8 md:p-12 lg:p-16 shadow-xl overflow-hidden">            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#111827] md:text-4xl lg:text-5xl mb-6 text-center">
                Como podes ajudar?
              </h2>
              <p className=" text-base text-[#111827] mb-6 md:text-lg">
                A tua contribuição é fundamental para o sucesso deste projeto. Com o teu apoio, podemos continuar a desenvolver e a fazer crescer a Comfy App. É simples:
              </p>
              <ul className="space-y-4  text-base md:text-lg text-[#111827] mb-8 bg-[#FAF0E6] rounded-[20px] p-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Clica no botão abaixo para fazer uma doação</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src="app/tiny_pink_cloud.svg" alt="" className="w-full h-full object-contain" />
                  </span>
                  <span>Escolhe o valor com que desejas contribuir e faz parte da transformação da vida de jovens em Olhão</span>
                </li>
              </ul>
              <div className="flex justify-center md:justify-start">
                <DonateButton className='bg-[#B496C8]' showFace={false}/>
              </div>
            </div>            
          </div>
          {/* Pink blob decoration - bottom-right, rotated ~10deg, contained within */}
          <PinkBlobDecoration
              className="absolute bottom-[-20px] right-230 z-10 lg:hidden"
            />

          {/* RIGHT/BOTTOM: Fundraising Goal - 1/3 width */}
          <FundraisingGoal />

        </div>
      </div>
    </section>
  );
}

