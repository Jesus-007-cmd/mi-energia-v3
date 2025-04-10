// Classes
import ButtonClass from '../../classes/ButtonClass';
import InputClass from '../../classes/InputClass';

// Components
import CustomButton from '../forms/CustomButton';

import { useEffect } from 'react';

export default function EmailFormContainer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `(function() {
      try {
        var f = document.createElement("iframe");
        f.src = 'https://forms.zohopublic.com/mienergiamexgm1/form/Servicioenelqueestoyinteresado/formperma/qf6cHK8mBp4oM5S_QfCl9Cnp5ESrTd8BhD0wtf51hxk?zf_rszfm=1';
        f.style.border="none";
        f.style.height="1113px";
        f.style.width="100%";
        f.style.transition="all 0.5s ease";
        f.setAttribute("aria-label", 'Servicio en el que estoy interesado');
        var d = document.getElementById("zf_div_qf6cHK8mBp4oM5S_QfCl9Cnp5ESrTd8BhD0wtf51hxk");
        d.appendChild(f);
        window.addEventListener('message', function () {
          var evntData = event.data;
          if (evntData && evntData.constructor == String) {
            var zf_ifrm_data = evntData.split("|");
            if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
              var zf_perma = zf_ifrm_data[0];
              var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
              var iframe = document.getElementById("zf_div_qf6cHK8mBp4oM5S_QfCl9Cnp5ESrTd8BhD0wtf51hxk").getElementsByTagName("iframe")[0];
              if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
                var prevIframeHeight = iframe.style.height;
                var zf_tout = false;
                if (zf_ifrm_data.length == 3) {
                  iframe.scrollIntoView();
                  zf_tout = true;
                }
                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  if (zf_tout) {
                    setTimeout(function () {
                      iframe.style.height = zf_ifrm_ht_nw;
                    }, 500);
                  } else {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          }
        }, false);
      } catch (e) {}
    })();`;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 p-6 md:px-20 lg:px-40 xl:px-80">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Servicio en el que estoy interesado
        </h2>
        <p className="text-center text-gray-600 mb-6">
          ¡Estamos aquí para ayudarte! Agenda tu cita por Zoom y conoce sobre nuestros servicios
        </p>
        <div id="zf_div_qf6cHK8mBp4oM5S_QfCl9Cnp5ESrTd8BhD0wtf51hxk"></div>
      </div>
    </div>
  );
}
