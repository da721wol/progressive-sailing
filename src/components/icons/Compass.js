import React from "react";

function Compass(props) {
  return (
    <svg
      width={props.width || "35px"} height={props.height || "35px"}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <circle cx="300" cy="300" r="280" fill="#fff"/>
      <path d="M300.905 20.001l.905.005.903.007.904.01.902.013.902.016.901.018.9.022.9.024.899.027.898.03.898.033.897.035.896.038.895.042.895.044.894.046.893.05.892.052.892.056.891.058.89.06.889.064.889.066.888.069.887.072.886.075.886.077.885.08.884.083.883.085.882.089.882.091.881.094.88.096.879.099.878.102.878.105.876.107.876.11.875.113.874.116.874.118.872.121.872.123.87.126.87.129.869.132.868.134.868.137.866.139.866.142.864.145.864.148.863.15.862.153.861.155.86.158.859.161.858.163.858.166.856.168.855.171.855.174.854.176.852.179.852.181.851.184.85.187.848.189.848.192.847.194.846.197.845.2.844.202.843.204.842.207.841.21.84.212.839.215.838.217.837.219.836.223.835.224.833.228.833.23.832.232.831.235.83.237.828.24.828.242.826.245.826.247.824.249.824.253.822.254.821.257.82.26.819.262.818.264.817.267.816.269.815.272.813.274.813.277.811.279.81.281.809.284.808.286.807.289.805.291.805.293.803.296.802.298.802.3.799.303.799.306.798.307.796.31.795.313.794.315.793.317.792.319.79.322.789.324.789.326.786.329.786.331.784.334.784.336.782.338.78.34.78.343.778.345.777.347.776.349.774.352.774.354.772.357.77.358.77.361.768.364.767.365.765.368.765.37.763.372.762.374.76.377.759.379.758.381.757.383.755.386.754.388.752.39.752.392.75.395.748.396.747.399.746.401.745.403.743.406.742.407.74.41.739.412.738.414.736.416.735.419.734.42.732.423.731.425.729.427.728.429.727.431.725.434.724.435.722.438.721.439.72.442.718.444.716.446.715.448.714.451.713.452.71.454.71.457.708.458.706.461.705.463.704.464.702.467.7.469.699.471.698.473.696.475.694.477.693.479.692.481.69.483.688.485.687.487.686.49.684.491.682.493.681.495.679.497.678.499.676.501.675.504.673.505.672.507.67.509.668.511.667.513.665.514.664.517.662.519.66.521.659.522.657.525.656.527.654.528.652.53.651.533.649.534.648.536.645.538.645.54.642.542.641.543.639.546.638.547.636.55.634.551.633.553.631.555.629.557.628.558.626.561.624.562.623.564.62.566.62.568.617.57.616.571.614.574.612.575.611.577.608.578.607.581.606.582.603.584.602.586.6.588.599.59.596.591.595.593.593.595.591.596.59.599.588.6.586.602.584.603.582.606.581.607.578.608.577.611.575.612.574.614.571.616.57.617.568.62.566.62.564.623.562.624.561.626.558.628.557.629.555.631.553.633.551.634.55.636.547.638.546.639.543.641.542.642.54.645.538.645.536.648.534.649.533.651.53.652.528.654.527.656.525.657.522.659.521.66.519.662.517.664.514.665.513.667.511.668.509.67.507.672.505.673.504.675.501.676.499.678.497.679.495.681.493.682.491.684.49.686.487.687.485.688.483.69.481.692.479.693.477.694.475.696.473.698.471.699.469.7.467.702.464.704.463.705.461.706.458.708.457.71.454.71.452.713.451.714.448.715.446.716.444.718.442.72.439.721.438.722.435.724.434.725.431.727.429.728.427.729.425.731.423.732.42.734.419.735.416.736.414.738.412.739.41.74.407.742.406.743.403.745.401.746.399.747.396.748.395.75.392.752.39.752.388.754.386.755.383.757.381.758.379.759.377.76.374.762.372.763.37.765.368.765.365.767.364.768.361.77.358.77.357.772.354.774.352.774.349.776.347.777.345.778.343.78.34.78.338.782.336.784.334.784.331.786.329.786.326.789.324.789.322.79.319.792.317.793.315.794.313.795.31.796.307.798.306.799.303.799.3.802.298.802.296.803.293.805.291.805.289.807.286.808.284.809.281.81.279.811.277.813.274.813.272.815.269.816.267.817.264.818.262.819.26.82.257.821.254.822.253.824.249.824.247.826.245.826.242.828.24.828.237.83.235.831.232.832.23.833.228.833.224.835.223.836.219.837.217.838.215.839.212.84.21.841.207.842.204.843.202.844.2.845.197.846.194.847.192.848.189.848.187.85.184.851.181.852.179.852.176.854.174.855.171.855.168.856.166.858.163.858.161.859.158.86.155.861.153.862.15.863.148.864.145.864.142.866.139.866.137.868.134.868.132.869.129.87.126.87.123.872.121.872.118.874.116.874.113.875.11.876.107.876.105.878.102.878.099.879.096.88.094.881.091.882.089.882.085.883.083.884.08.885.077.886.075.886.072.887.069.888.066.889.064.889.06.89.058.891.056.892.052.892.05.893.046.894.044.895.042.895.038.896.035.897.033.898.03.898.027.899.024.9.022.9.018.901.016.902.013.902.01.904.007.903.005.905.001.905-.001.905-.005.905-.007.903-.01.904-.013.902-.016.902-.018.901-.022.9-.024.9-.027.899-.03.898-.033.898-.035.897-.038.896-.042.895-.044.895-.046.894-.05.893-.052.892-.056.892-.058.891-.06.89-.064.889-.066.889-.069.888-.072.887-.075.886-.077.886-.08.885-.083.884-.085.883-.089.882-.091.882-.094.881-.096.88-.099.879-.102.878-.105.878-.107.876-.11.876-.113.875-.116.874-.118.874-.121.872-.123.872-.126.87-.129.87-.132.869-.134.868-.137.868-.139.866-.142.866-.145.864-.148.864-.15.863-.153.862-.155.861-.158.86-.161.859-.163.858-.166.858-.168.856-.171.855-.174.855-.176.854-.179.852-.181.852-.184.851-.187.85-.189.848-.192.848-.194.847-.197.846-.2.845-.202.844-.204.843-.207.842-.21.841-.212.84-.215.839-.217.838-.219.837-.223.836-.224.835-.228.833-.23.833-.232.832-.235.831-.237.83-.24.828-.242.828-.245.826-.247.826-.249.824-.253.824-.254.822-.257.821-.26.82-.262.819-.264.818-.267.817-.269.816-.272.815-.274.813-.277.813-.279.811-.281.81-.284.809-.286.808-.289.807-.291.805-.293.805-.296.803-.298.802-.3.802-.303.799-.306.799-.307.798-.31.796-.313.795-.315.794-.317.793-.319.792-.322.79-.324.789-.326.789-.329.786-.331.786-.334.784-.336.784-.338.782-.34.78-.343.78-.345.778-.347.777-.349.776-.352.774-.354.774-.357.772-.358.77-.361.77-.364.768-.365.767-.368.765-.37.765-.372.763-.374.762-.377.76-.379.759-.381.758-.383.757-.386.755-.388.754-.39.752-.392.752-.395.75-.396.748-.399.747-.401.746-.403.745-.406.743-.407.742-.41.74-.412.739-.414.738-.416.736-.419.735-.42.734-.423.732-.425.731-.427.729-.429.728-.431.727-.434.725-.435.724-.438.722-.439.721-.442.72-.444.718-.446.716-.448.715-.451.714-.452.713-.454.71-.457.71-.458.708-.461.706-.463.705-.464.704-.467.702-.469.7-.471.699-.473.698-.475.696-.477.694-.479.693-.481.692-.483.69-.485.688-.487.687-.49.686-.491.684-.493.682-.495.681-.497.679-.499.678-.501.676-.504.675-.505.673-.507.672-.509.67-.511.668-.513.667-.514.665-.517.664-.519.662-.521.66-.522.659-.525.657-.527.656-.528.654-.53.652-.533.651-.534.649-.536.648-.538.645-.54.645-.542.642-.543.641-.546.639-.547.638-.55.636-.551.634-.553.633-.555.631-.557.629-.558.628-.561.626-.562.624-.564.623-.566.62-.568.62-.57.617-.571.616-.574.614-.575.612-.577.611-.578.608-.581.607-.582.606-.584.603-.586.602-.588.6-.59.599-.591.596-.593.595-.595.593-.596.591-.599.59-.6.588-.602.586-.603.584-.606.582-.607.581-.608.578-.611.577-.612.575-.614.574-.616.571-.617.57-.62.568-.62.566-.623.564-.624.562-.626.561-.628.558-.629.557-.631.555-.633.553-.634.551-.636.55-.638.547-.639.546-.641.543-.642.542-.645.54-.645.538-.648.536-.649.534-.651.533-.652.53-.654.528-.656.527-.657.525-.659.522-.66.521-.662.519-.664.517-.665.514-.667.513-.668.511-.67.509-.672.507-.673.505-.675.504-.676.501-.678.499-.679.497-.681.495-.682.493-.684.491-.686.49-.687.487-.688.485-.69.483-.692.481-.693.479-.694.477-.696.475-.698.473-.699.471-.7.469-.702.467-.704.464-.705.463-.706.461-.708.458-.71.457-.71.454-.713.452-.714.451-.715.448-.716.446-.718.444-.72.442-.721.439-.722.438-.724.435-.725.434-.727.431-.728.429-.729.427-.731.425-.732.423-.734.42-.735.419-.736.416-.738.414-.739.412-.74.41-.742.407-.743.406-.745.403-.746.401-.747.399-.748.396-.75.395-.752.392-.752.39-.754.388-.755.386-.757.383-.758.381-.759.379-.76.377-.762.374-.763.372-.765.37-.765.368-.767.365-.768.364-.77.361-.77.358-.772.357-.774.354-.774.352-.776.349-.777.347-.778.345-.78.343-.78.34-.782.338-.784.336-.784.334-.786.331-.786.329-.789.326-.789.324-.79.322-.792.319-.793.317-.794.315-.795.313-.796.31-.798.307-.799.306-.799.303-.802.3-.802.298-.803.296-.805.293-.805.291-.807.289-.808.286-.809.284-.81.281-.811.279-.813.277-.813.274-.815.272-.816.269-.817.267-.818.264-.819.262-.82.26-.821.257-.822.254-.824.253-.824.249-.826.247-.826.245-.828.242-.828.24-.83.237-.831.235-.832.232-.833.23-.833.228-.835.224-.836.223-.837.219-.838.217-.839.215-.84.212-.841.21-.842.207-.843.204-.844.202-.845.2-.846.197-.847.194-.848.192-.848.189-.85.187-.851.184-.852.181-.852.179-.854.176-.855.174-.855.171-.856.168-.858.166-.858.163-.859.161-.86.158-.861.155-.862.153-.863.15-.864.148-.864.145-.866.142-.866.139-.868.137-.868.134-.869.132-.87.129-.87.126-.872.123-.872.121-.874.118-.874.116-.875.113-.876.11-.876.107-.878.105-.878.102-.879.099-.88.096-.881.094-.882.091-.882.089-.883.085-.884.083-.885.08-.886.077-.886.075-.887.072-.888.069-.889.066-.889.064-.89.06-.891.058-.892.056-.892.052-.893.05-.894.046-.895.044-.895.042-.896.038-.897.035-.898.033-.898.03-.899.027-.9.024-.9.022-.901.018-.902.016-.902.013-.904.01-.903.007-.905.005L300 580l-.905-.001-.905-.005-.903-.007-.904-.01-.902-.013-.902-.016-.901-.018-.9-.022-.9-.024-.899-.027-.898-.03-.898-.033-.897-.035-.896-.038-.895-.042-.895-.044-.894-.046-.893-.05-.892-.052-.892-.056-.891-.058-.89-.06-.889-.064-.889-.066-.888-.069-.887-.072-.886-.075-.886-.077-.885-.08-.884-.083-.883-.085-.882-.089-.882-.091-.881-.094-.88-.096-.879-.099-.878-.102-.878-.105-.876-.107-.876-.11-.875-.113-.874-.116-.874-.118-.872-.121-.872-.123-.87-.126-.87-.129-.869-.132-.868-.134-.868-.137-.866-.139-.866-.142-.864-.145-.864-.148-.863-.15-.862-.153-.861-.155-.86-.158-.859-.161-.858-.163-.858-.166-.856-.168-.855-.171-.855-.174-.854-.176-.852-.179-.852-.181-.851-.184-.85-.187-.848-.189-.848-.192-.847-.194-.846-.197-.845-.2-.844-.202-.843-.204-.842-.207-.841-.21-.84-.212-.839-.215-.838-.217-.837-.219-.836-.223-.835-.224-.833-.228-.833-.23-.832-.232-.831-.235-.83-.237-.828-.24-.828-.242-.826-.245-.826-.247-.824-.249-.824-.253-.822-.254-.821-.257-.82-.26-.819-.262-.818-.264-.817-.267-.816-.269-.815-.272-.813-.274-.813-.277-.811-.279-.81-.281-.809-.284-.808-.286-.807-.289-.805-.291-.805-.293-.803-.296-.802-.298-.802-.3-.799-.303-.799-.306-.798-.307-.796-.31-.795-.313-.794-.315-.793-.317-.792-.319-.79-.322-.789-.324-.789-.326-.786-.329-.786-.331-.784-.334-.784-.336-.782-.338-.78-.34-.78-.343-.778-.345-.777-.347-.776-.349-.774-.352-.774-.354-.772-.357-.77-.358-.77-.361-.768-.364-.767-.365-.765-.368-.765-.37-.763-.372-.762-.374-.76-.377-.759-.379-.758-.381-.757-.383-.755-.386-.754-.388-.752-.39-.752-.392-.75-.395-.748-.396-.747-.399-.746-.401-.745-.403-.743-.406-.742-.407-.74-.41-.739-.412-.738-.414-.736-.416-.735-.419-.734-.42-.732-.423-.731-.425-.729-.427-.728-.429-.727-.431-.725-.434-.724-.435-.722-.438-.721-.439-.72-.442-.718-.444-.716-.446-.715-.448-.714-.451-.713-.452-.71-.454-.71-.457-.708-.458-.706-.461-.705-.463-.704-.464-.702-.467-.7-.469-.699-.471-.698-.473-.696-.475-.694-.477-.693-.479-.692-.481-.69-.483-.688-.485-.687-.487-.686-.49-.684-.491-.682-.493-.681-.495-.679-.497-.678-.499-.676-.501-.675-.504-.673-.505-.672-.507-.67-.509-.668-.511-.667-.513-.665-.514-.664-.517-.662-.519-.66-.521-.659-.522-.657-.525-.656-.527-.654-.528-.652-.53-.651-.533-.649-.534-.648-.536-.645-.538-.645-.54-.642-.542-.641-.543-.639-.546-.638-.547-.636-.55-.634-.551-.633-.553-.631-.555-.629-.557-.628-.558-.626-.561-.624-.562-.623-.564-.62-.566-.62-.568-.617-.57-.616-.571-.614-.574-.612-.575-.611-.577-.608-.578-.607-.581-.606-.582-.603-.584-.602-.586-.6-.588-.599-.59-.596-.591-.595-.593-.593-.595-.591-.596-.59-.599-.588-.6-.586-.602-.584-.603-.582-.606-.581-.607-.578-.608-.577-.611-.575-.612-.574-.614-.571-.616-.57-.617-.568-.62-.566-.62-.564-.623-.562-.624-.561-.626-.558-.628-.557-.629-.555-.631-.553-.633-.551-.634-.55-.636-.547-.638-.546-.639-.543-.641-.542-.642-.54-.645-.538-.645-.536-.648-.534-.649-.533-.651-.53-.652-.528-.654-.527-.656-.525-.657-.522-.659-.521-.66-.519-.662-.517-.664-.514-.665-.513-.667-.511-.668-.509-.67-.507-.672-.505-.673-.504-.675-.501-.676-.499-.678-.497-.679-.495-.681-.493-.682-.491-.684-.49-.686-.487-.687-.485-.688-.483-.69-.481-.692-.479-.693-.477-.694-.475-.696-.473-.698-.471-.699-.469-.7-.467-.702-.464-.704-.463-.705-.461-.706-.458-.708-.457-.71-.454-.71-.452-.713-.451-.714-.448-.715-.446-.716-.444-.718-.442-.72-.439-.721-.438-.722-.435-.724-.434-.725-.431-.727-.429-.728-.427-.729-.425-.731-.423-.732-.42-.734-.419-.735-.416-.736-.414-.738-.412-.739-.41-.74-.407-.742-.406-.743-.403-.745-.401-.746-.399-.747-.396-.748-.395-.75-.392-.752-.39-.752-.388-.754-.386-.755-.383-.757-.381-.758-.379-.759-.377-.76-.374-.762-.372-.763-.37-.765-.368-.765-.365-.767-.364-.768-.361-.77-.358-.77-.357-.772-.354-.774-.352-.774-.349-.776-.347-.777-.345-.778-.343-.78-.34-.78-.338-.782-.336-.784-.334-.784-.331-.786-.329-.786-.326-.789-.324-.789-.322-.79-.319-.792-.317-.793-.315-.794-.313-.795-.31-.796-.307-.798-.306-.799-.303-.799-.3-.802-.298-.802-.296-.803-.293-.805-.291-.805-.289-.807-.286-.808-.284-.809-.281-.81-.279-.811-.277-.813-.274-.813-.272-.815-.269-.816-.267-.817-.264-.818-.262-.819-.26-.82-.257-.821-.254-.822-.253-.824-.249-.824-.247-.826-.245-.826-.242-.828-.24-.828-.237-.83-.235-.831-.232-.832-.23-.833-.228-.833-.224-.835-.223-.836-.219-.837-.217-.838-.215-.839-.212-.84-.21-.841-.207-.842-.204-.843-.202-.844-.2-.845-.197-.846-.194-.847-.192-.848-.189-.848-.187-.85-.184-.851-.181-.852-.179-.852-.176-.854-.174-.855-.171-.855-.168-.856-.166-.858-.163-.858-.161-.859-.158-.86-.155-.861-.153-.862-.15-.863-.148-.864-.145-.864-.142-.866-.139-.866-.137-.868-.134-.868-.132-.869-.129-.87-.126-.87-.123-.872-.121-.872-.118-.874-.116-.874-.113-.875-.11-.876-.107-.876-.105-.878-.102-.878-.099-.879-.096-.88-.094-.881-.091-.882-.089-.882-.085-.883-.083-.884-.08-.885-.077-.886-.075-.886-.072-.887-.069-.888-.066-.889-.064-.889-.06-.89-.058-.891-.056-.892-.052-.892-.05-.893-.046-.894-.044-.895-.042-.895-.038-.896-.035-.897-.033-.898-.03-.898-.027-.899-.024-.9-.022-.9-.018-.901-.016-.902-.013-.902-.01-.904-.007-.903-.005-.905L20 300l.001-.905.005-.905.007-.903.01-.904.013-.902.016-.902.018-.901.022-.9.024-.9.027-.899.03-.898.033-.898.035-.897.038-.896.042-.895.044-.895.046-.894.05-.893.052-.892.056-.892.058-.891.06-.89.064-.889.066-.889.069-.888.072-.887.075-.886.077-.886.08-.885.083-.884.085-.883.089-.882.091-.882.094-.881.096-.88.099-.879.102-.878.105-.878.107-.876.11-.876.113-.875.116-.874.118-.874.121-.872.123-.872.126-.87.129-.87.132-.869.134-.868.137-.868.139-.866.142-.866.145-.864.148-.864.15-.863.153-.862.155-.861.158-.86.161-.859.163-.858.166-.858.168-.856.171-.855.174-.855.176-.854.179-.852.181-.852.184-.851.187-.85.189-.848.192-.848.194-.847.197-.846.2-.845.202-.844.204-.843.207-.842.21-.841.212-.84.215-.839.217-.838.219-.837.223-.836.224-.835.228-.833.23-.833.232-.832.235-.831.237-.83.24-.828.242-.828.245-.826.247-.826.249-.824.253-.824.254-.822.257-.821.26-.82.262-.819.264-.818.267-.817.269-.816.272-.815.274-.813.277-.813.279-.811.281-.81.284-.809.286-.808.289-.807.291-.805.293-.805.296-.803.298-.802.3-.802.303-.799.306-.799.307-.798.31-.796.313-.795.315-.794.317-.793.319-.792.322-.79.324-.789.326-.789.329-.786.331-.786.334-.784.336-.784.338-.782.34-.78.343-.78.345-.778.347-.777.349-.776.352-.774.354-.774.357-.772.358-.77.361-.77.364-.768.365-.767.368-.765.37-.765.372-.763.374-.762.377-.76.379-.759.381-.758.383-.757.386-.755.388-.754.39-.752.392-.752.395-.75.396-.748.399-.747.401-.746.403-.745.406-.743.407-.742.41-.74.412-.739.414-.738.416-.736.419-.735.42-.734.423-.732.425-.731.427-.729.429-.728.431-.727.434-.725.435-.724.438-.722.439-.721.442-.72.444-.718.446-.716.448-.715.451-.714.452-.713.454-.71.457-.71.458-.708.461-.706.463-.705.464-.704.467-.702.469-.7.471-.699.473-.698.475-.696.477-.694.479-.693.481-.692.483-.69.485-.688.487-.687.49-.686.491-.684.493-.682.495-.681.497-.679.499-.678.501-.676.504-.675.505-.673.507-.672.509-.67.511-.668.513-.667.514-.665.517-.664.519-.662.521-.66.522-.659.525-.657.527-.656.528-.654.53-.652.533-.651.534-.649.536-.648.538-.645.54-.645.542-.642.543-.641.546-.639.547-.638.55-.636.551-.634.553-.633.555-.631.557-.629.558-.628.561-.626.562-.624.564-.623.566-.62.568-.62.57-.617.571-.616.574-.614.575-.612.577-.611.578-.608.581-.607.582-.606.584-.603.586-.602.588-.6.59-.599.591-.596.593-.595.595-.593.596-.591.599-.59.6-.588.602-.586.603-.584.606-.582.607-.581.608-.578.611-.577.612-.575.614-.574.616-.571.617-.57.62-.568.62-.566.623-.564.624-.562.626-.561.628-.558.629-.557.631-.555.633-.553.634-.551.636-.55.638-.547.639-.546.641-.543.642-.542.645-.54.645-.538.648-.536.649-.534.651-.533.652-.53.654-.528.656-.527.657-.525.659-.522.66-.521.662-.519.664-.517.665-.514.667-.513.668-.511.67-.509.672-.507.673-.505.675-.504.676-.501.678-.499.679-.497.681-.495.682-.493.684-.491.686-.49.687-.487.688-.485.69-.483.692-.481.693-.479.694-.477.696-.475.698-.473.699-.471.7-.469.702-.467.704-.464.705-.463.706-.461.708-.458.71-.457.71-.454.713-.452.714-.451.715-.448.716-.446.718-.444.72-.442.721-.439.722-.438.724-.435.725-.434.727-.431.728-.429.729-.427.731-.425.732-.423.734-.42.735-.419.736-.416.738-.414.739-.412.74-.41.742-.407.743-.406.745-.403.746-.401.747-.399.748-.396.75-.395.752-.392.752-.39.754-.388.755-.386.757-.383.758-.381.759-.379.76-.377.762-.374.763-.372.765-.37.765-.368.767-.365.768-.364.77-.361.77-.358.772-.357.774-.354.774-.352.776-.349.777-.347.778-.345.78-.343.78-.34.782-.338.784-.336.784-.334.786-.331.786-.329.789-.326.789-.324.79-.322.792-.319.793-.317.794-.315.795-.313.796-.31.798-.307.799-.306.799-.303.802-.3.802-.298.803-.296.805-.293.805-.291.807-.289.808-.286.809-.284.81-.281.811-.279.813-.277.813-.274.815-.272.816-.269.817-.267.818-.264.819-.262.82-.26.821-.257.822-.254.824-.253.824-.249.826-.247.826-.245.828-.242.828-.24.83-.237.831-.235.832-.232.833-.23.833-.228.835-.224.836-.223.837-.219.838-.217.839-.215.84-.212.841-.21.842-.207.843-.204.844-.202.845-.2.846-.197.847-.194.848-.192.848-.189.85-.187.851-.184.852-.181.852-.179.854-.176.855-.174.855-.171.856-.168.858-.166.858-.163.859-.161.86-.158.861-.155.862-.153.863-.15.864-.148.864-.145.866-.142.866-.139.868-.137.868-.134.869-.132.87-.129.87-.126.872-.123.872-.121.874-.118.874-.116.875-.113.876-.11.876-.107.878-.105.878-.102.879-.099.88-.096.881-.094.882-.091.882-.089.883-.085.884-.083.885-.08.886-.077.886-.075.887-.072.888-.069.889-.066.889-.064.89-.06.891-.058.892-.056.892-.052.893-.05.894-.046.895-.044.895-.042.896-.038.897-.035.898-.033.898-.03.899-.027.9-.024.9-.022.901-.018.902-.016.902-.013.904-.01.903-.007.905-.005L300 20l.905.001zm-1.715 30l-.809.004-.809.007-.808.009-.807.011-.807.014-.806.017-.805.019-.805.022-.804.024-.803.027-.803.029-.801.032-.802.034-.8.037-.8.039-.799.042-.798.044-.798.047-.797.049-.796.052-.795.054-.795.057-.794.059-.793.062-.793.064-.792.067-.791.069-.79.072-.789.074-.789.076-.788.079-.788.081-.786.084-.786.086-.785.089-.784.091-.784.093-.783.096-.782.098-.781.101-.78.103-.78.106-.778.107-.778.111-.778.112-.776.115-.776.118-.775.12-.774.122-.773.124-.772.127-.772.129-.771.132-.77.134-.769.136-.768.139-.767.141-.767.143-.766.146-.765.148-.764.15-.763.153-.762.155-.762.157-.761.159-.76.162-.758.164-.759.167-.757.169-.756.171-.756.173-.754.176-.754.178-.753.18-.752.182-.751.185-.75.187-.749.189-.749.192-.747.193-.747.196-.745.199-.745.2-.744.203-.743.205-.742.207-.74.209-.741.212-.739.214-.738.216-.737.218-.737.221-.735.222-.734.225-.734.227-.732.23-.732.231-.73.234-.73.235-.728.238-.728.241-.727.242-.725.245-.725.246-.724.249-.722.251-.722.253-.721.256-.719.257-.719.26-.718.261-.717.264-.715.266-.715.268-.713.27-.713.273-.711.274-.711.277-.709.279-.708.28-.708.283-.706.285-.705.287-.704.289-.703.292-.702.293-.701.296-.7.297-.699.3-.698.301-.696.304-.696.306-.694.307-.694.31-.692.312-.691.314-.69.316-.689.318-.687.32-.687.322-.686.324-.684.327-.683.328-.682.33-.681.332-.68.334-.679.336-.677.339-.677.34-.675.342-.674.344-.673.346-.672.348-.67.351-.67.352-.668.354-.667.356-.666.358-.664.36-.664.362-.662.363-.661.366-.66.368-.659.37-.657.371-.656.374-.655.375-.654.378-.652.379-.651.381-.65.383-.649.385-.648.387-.646.389-.645.391-.644.392-.642.395-.641.396-.64.399-.639.4-.637.402-.636.404-.635.406-.634.407-.632.41-.631.411-.63.414-.628.415-.627.416-.626.419-.624.421-.623.422-.622.424-.62.427-.619.428-.618.429-.616.432-.615.433-.614.435-.612.437-.611.439-.61.441-.608.442-.607.444-.605.446-.604.448-.603.449-.601.451-.6.453-.599.455-.597.456-.595.459-.595.46-.593.462-.591.463-.59.465-.589.467-.587.469-.586.47-.584.473-.583.473-.582.476-.58.477-.578.479-.577.481-.576.482-.574.484-.573.486-.571.488-.57.489-.568.491-.567.492-.565.495-.564.496-.563.497-.56.499-.56.501-.558.503-.556.504-.555.506-.553.507-.552.509-.55.511-.549.512-.547.514-.545.516-.544.517-.543.519-.541.52-.539.522-.538.524-.536.525-.535.527-.533.528-.532.53-.53.532-.528.533-.527.535-.525.536-.524.538-.522.539-.52.541-.519.543-.517.544-.516.545-.514.547-.512.549-.511.55-.509.552-.507.553-.506.555-.504.556-.503.558-.501.56-.499.56-.497.563-.496.564-.495.565-.492.567-.491.568-.489.57-.488.571-.486.573-.484.574-.482.576-.481.577-.479.578-.477.58-.476.582-.473.583-.473.584-.47.586-.469.587-.467.589-.465.59-.463.591-.462.593-.46.595-.459.595-.456.597-.455.599-.453.6-.451.601-.449.603-.448.604-.446.605-.444.607-.442.608-.441.61-.439.611-.437.612-.435.614-.433.615-.432.616-.429.618-.428.619-.427.62-.424.622-.422.623-.421.624-.419.626-.416.627-.415.628-.414.63-.411.631-.41.632-.407.634-.406.635-.404.636-.402.637-.4.639-.399.64-.396.641-.395.642-.392.644-.391.645-.389.646-.387.648-.385.649-.383.65-.381.651-.379.652-.378.654-.375.655-.374.656-.371.657-.37.659-.368.66-.366.661-.363.662-.362.664-.36.664-.358.666-.356.667-.354.668-.352.67-.351.67-.348.672-.346.673-.344.674-.342.675-.34.677-.339.677-.336.679-.334.68-.332.681-.33.682-.328.683-.327.684-.324.686-.322.687-.32.687-.318.689-.316.69-.314.691-.312.692-.31.694-.307.694-.306.696-.304.696-.301.698-.3.699-.297.7-.296.701-.293.702-.292.703-.289.704-.287.705-.285.706-.283.708-.28.708-.279.709-.277.711-.274.711-.273.713-.27.713-.268.715-.266.715-.264.717-.261.718-.26.719-.257.719-.256.721-.253.722-.251.722-.249.724-.246.725-.245.725-.242.727-.241.728-.238.728-.235.73-.234.73-.231.732-.23.732-.227.734-.225.734-.222.735-.221.737-.218.737-.216.738-.214.739-.212.741-.209.74-.207.742-.205.743-.203.744-.2.745-.199.745-.196.747-.193.747-.192.749-.189.749-.187.75-.185.751-.182.752-.18.753-.178.754-.176.754-.173.756-.171.756-.169.757-.167.759-.164.758-.162.76-.159.761-.157.762-.155.762-.153.763-.15.764-.148.765-.146.766-.143.767-.141.767-.139.768-.136.769-.134.77-.132.771-.129.772-.127.772-.124.773-.122.774-.12.775-.118.776-.115.776-.112.778-.111.778-.107.778-.106.78-.103.78-.101.781-.098.782-.096.783-.093.784-.091.784-.089.785-.086.786-.084.786-.081.788-.079.788-.076.789-.074.789-.072.79-.069.791-.067.792-.064.793-.062.793-.059.794-.057.795-.054.795-.052.796-.049.797-.047.798-.044.798-.042.799-.039.8-.037.8-.034.802-.032.801-.029.803-.027.803-.024.804-.022.805-.019.805-.017.806-.014.807-.011.807-.009.808-.007.809-.004.809L50 300l.001.81.004.809.007.809.009.808.011.807.014.807.017.806.019.805.022.805.024.804.027.803.029.803.032.801.034.802.037.8.039.8.042.799.044.798.047.798.049.797.052.796.054.795.057.795.059.794.062.793.064.793.067.792.069.791.072.79.074.789.076.789.079.788.081.788.084.786.086.786.089.785.091.784.093.784.096.783.098.782.101.781.103.78.106.78.107.778.111.778.112.778.115.776.118.776.12.775.122.774.124.773.127.772.129.772.132.771.134.769.136.77.139.768.141.767.143.767.146.766.148.765.15.764.153.763.155.762.157.762.159.761.162.76.164.759.167.758.169.757.171.756.173.756.176.754.178.754.18.753.182.752.185.751.187.75.189.749.192.749.193.747.196.747.198.745.201.745.203.744.205.743.207.742.209.741.212.74.214.739.216.738.218.737.221.737.222.735.225.734.227.734.229.732.232.732.234.73.235.73.238.728.241.728.242.727.245.725.246.725.249.724.251.722.253.722.256.721.257.72.26.718.261.718.264.716.266.716.268.715.27.713.273.713.274.711.277.711.279.709.28.708.283.708.285.706.287.705.289.704.292.703.293.703.296.7.297.7.3.699.301.698.304.696.306.696.307.694.31.694.312.692.314.691.316.69.318.689.32.687.322.687.324.686.327.684.328.683.33.682.332.681.334.68.336.679.339.677.34.677.342.675.344.674.346.673.348.672.351.67.352.67.354.668.356.667.358.666.36.664.362.664.363.662.366.661.368.66.37.658.371.658.374.656.375.655.378.654.379.652.381.651.383.65.385.649.387.648.389.646.391.645.393.644.394.642.396.641.399.64.4.639.402.637.404.637.406.634.407.634.41.632.411.631.414.63.415.628.416.627.419.625.421.625.422.623.424.621.427.621.428.619.429.618.432.616.433.615.435.614.437.612.439.611.44.609.443.609.444.607.446.605.447.604.45.603.451.601.453.6.455.599.456.597.459.596.46.594.461.593.464.591.465.59.467.589.469.587.47.586.473.584.473.583.476.582.477.58.479.578.481.578.482.575.484.574.486.573.488.571.489.57.491.568.493.567.494.565.495.564.498.563.499.56.501.56.503.558.504.556.506.555.507.553.509.552.511.55.512.548.514.548.516.545.517.544.519.543.52.541.522.539.524.538.525.536.527.535.528.533.53.532.532.53.533.528.535.527.536.525.538.524.539.522.541.521.543.518.543.517.546.516.548.514.548.512.55.511.552.509.553.507.555.506.556.504.558.503.56.501.56.499.563.497.564.497.565.494.567.492.568.491.57.489.571.488.573.485.574.485.575.482.578.481.579.479.579.477.582.476.582.473.585.473.585.47.588.469.589.467.59.465.591.464.593.461.595.46.595.458.597.457.599.455.6.453.601.451.603.449.604.449.605.445.607.444.608.442.611.442.61.438.612.436.613.436.616.433.617.432.617.429.619.428.62.427.622.424.623.422.625.421.625.419.627.416.628.415.631.414.63.411.632.409.633.408.636.406.636.404.637.402.639.4.639.398.641.397.644.395.644.392.644.391.646.389.648.387.648.385.65.383.652.382.652.378.653.377.656.377.656.373.657.371.659.37.66.368.661.366.661.363.665.363.665.36.665.357.667.356.668.354.67.352.67.351.672.348.672.346.675.344.676.343.675.339.678.339.679.336.679.334.681.332.683.33.684.329.683.325.686.325.687.322.687.32.689.318.691.316.691.314.691.312.693.309.695.308.696.306.697.304.697.302.698.299.7.297.702.296.702.293.703.291.703.289.706.288.706.285.707.283.71.281.708.278.71.277.712.274.712.272.715.271.714.268.715.266.717.264.718.261.719.26.719.258.721.255.721.253.723.251.724.249.725.247.725.244.726.242.729.241.728.238.73.235.73.234.732.231.733.23.733.227.734.225.735.222.737.221.738.218.737.216.739.214.741.212.74.209.742.207.743.205.744.203.745.201.745.198.747.196.747.193.749.192.749.189.75.187.752.185.751.182.753.181.754.177.754.176.756.173.755.171.759.169.758.167.758.164.76.162.761.159.761.157.763.155.763.153.765.15.765.148.765.146.766.143.768.141.768.139.769.136.771.134.77.132.772.129.773.127.772.124.774.122.775.12.776.118.776.115.777.112.779.111.779.108.778.105.781.103.782.101.781.098.783.096.784.093.784.091.785.089.786.086.787.084.787.081.788.079.788.076.79.074.79.072.791.069.792.067.794.064.792.062.793.059.796.057.795.054.796.052.798.049.797.047.798.044.8.042.798.039.801.037.802.034.801.032.802.029.804.027.804.024.804.022.807.019.805.017.806.014.809.011.807.009.808.007.81.004.81.001.81-.001.81-.004.808-.007.807-.009.809-.011.806-.014.805-.017.807-.019.804-.022.804-.024.804-.027.802-.029.801-.032.802-.034.801-.037.798-.039.8-.042.798-.044.797-.047.798-.049.796-.052.795-.054.796-.057.793-.059.792-.062.794-.064.792-.067.791-.069.79-.072.79-.074.788-.076.788-.079.787-.081.787-.084.786-.086.785-.089.784-.091.784-.093.783-.096.781-.098.782-.101.781-.103.778-.105.779-.108.779-.111.777-.112.776-.115.776-.118.775-.12.774-.122.772-.124.773-.127.772-.129.77-.132.771-.134.769-.136.768-.139.768-.141.766-.143.765-.146.765-.148.765-.15.763-.153.762-.155.762-.157.761-.159.76-.162.758-.164.758-.167.759-.169.755-.171.756-.173.754-.176.754-.177.753-.181.751-.182.752-.185.75-.187.749-.189.749-.192.747-.193.747-.196.745-.198.745-.201.744-.203.743-.205.742-.207.74-.209.741-.212.739-.214.737-.216.738-.218.737-.221.735-.222.734-.225.733-.227.733-.23.732-.231.73-.234.73-.235.728-.238.729-.241.726-.242.725-.244.725-.247.724-.249.723-.251.721-.253.721-.255.719-.258.719-.26.718-.261.717-.264.715-.266.714-.268.714-.271.713-.272.712-.274.71-.277.708-.278.71-.281.707-.283.706-.285.706-.288.703-.288.703-.292.702-.293.702-.296.7-.297.697-.299.698-.302.697-.304.696-.306.695-.308.693-.31.691-.311.691-.314.691-.316.689-.318.687-.32.687-.322.686-.325.684-.325.684-.329.682-.33.681-.332.679-.334.679-.336.678-.339.675-.339.676-.343.675-.344.671-.346.672-.348.671-.351.67-.352.668-.354.667-.356.666-.358.664-.359.665-.363.661-.363.661-.366.66-.368.659-.37.657-.371.655-.373.657-.377.653-.377.652-.379.652-.381.65-.383.648-.385.648-.387.646-.389.644-.391.644-.392.643-.395.642-.397.64-.398.638-.4.637-.402.636-.404.636-.406.633-.408.632-.409.631-.411.63-.414.628-.415.627-.416.625-.419.625-.421.623-.422.621-.424.621-.427.619-.428.617-.429.617-.432.616-.433.613-.436.612-.436.61-.438.611-.442.609-.442.606-.444.604-.445.605-.448.603-.45.601-.451.6-.453.599-.455.597-.457.596-.458.594-.46.592-.461.593-.464.589-.465.589-.467.587-.469.586-.47.585-.473.582-.474.582-.475.579-.477.579-.479.578-.481.575-.482.574-.485.573-.485.571-.488.57-.489.568-.491.567-.493.565-.493.564-.497.563-.497.56-.499.56-.501.558-.503.556-.504.555-.506.553-.507.552-.509.55-.511.548-.512.548-.514.546-.516.543-.517.543-.518.541-.521.54-.522.537-.524.536-.525.535-.527.533-.528.532-.53.53-.532.528-.533.527-.535.525-.536.524-.537.522-.54.521-.541.518-.543.517-.543.516-.546.514-.548.512-.548.511-.55.509-.552.507-.553.506-.555.504-.556.503-.558.501-.56.499-.56.497-.563.497-.564.493-.565.493-.567.491-.568.489-.57.488-.571.485-.573.485-.574.482-.575.481-.578.479-.579.477-.579.475-.582.474-.582.473-.585.47-.586.469-.587.467-.589.465-.589.464-.593.461-.592.46-.594.458-.596.457-.597.455-.599.453-.6.451-.601.45-.603.448-.605.445-.604.444-.606.442-.609.442-.611.438-.61.436-.612.436-.613.433-.616.432-.617.429-.617.428-.619.427-.621.424-.621.422-.623.421-.625.419-.625.416-.627.415-.628.414-.63.411-.631.409-.632.408-.633.406-.636.404-.636.402-.637.4-.638.398-.64.397-.642.395-.643.392-.644.391-.644.389-.646.387-.648.385-.648.383-.65.381-.652.379-.652.377-.653.377-.657.373-.655.371-.657.37-.659.368-.66.366-.661.363-.661.363-.665.359-.664.358-.666.356-.667.354-.668.352-.67.351-.671.348-.672.346-.671.344-.675.343-.676.339-.675.339-.678.336-.679.334-.679.332-.681.33-.682.329-.684.325-.684.325-.686.322-.687.32-.687.318-.689.316-.691.314-.691.311-.691.31-.693.308-.695.306-.696.304-.697.302-.698.299-.697.297-.7.296-.702.293-.702.292-.703.288-.703.288-.706.285-.706.283-.707.281-.71.278-.708.277-.71.274-.712.272-.713.271-.714.268-.714.266-.715.264-.717.261-.718.26-.719.258-.719.255-.721.253-.721.251-.723.249-.724.247-.725.244-.725.242-.726.241-.729.238-.728.235-.73.234-.73.231-.732.23-.733.227-.733.225-.734.222-.735.221-.737.218-.738.216-.737.214-.739.212-.741.209-.74.207-.742.205-.743.203-.744.201-.745.198-.745.196-.747.193-.747.192-.749.189-.749.187-.75.185-.752.182-.751.181-.753.177-.754.176-.754.173-.756.171-.755.169-.759.167-.758.164-.758.162-.76.159-.761.157-.762.155-.762.153-.763.15-.765.148-.765.146-.765.143-.766.141-.768.139-.768.136-.769.134-.771.132-.77.129-.772.127-.773.124-.772.122-.774.12-.775.118-.776.115-.776.112-.777.111-.779.108-.779.105-.778.103-.781.101-.782.098-.781.096-.783.093-.784.091-.784.089-.785.086-.786.084-.787.081-.787.079-.788.076-.788.074-.79.072-.79.069-.791.067-.792.064-.794.062-.792.059-.793.057-.796.054-.795.052-.796.049-.798.047-.797.044-.798.042-.8.039-.798.037-.801.034-.802.032-.801.029-.802.027-.804.024-.804.022-.804.019-.807.017-.805.014-.806.011-.809.009-.807.007-.808.004-.81.001-.81-.001-.81-.004-.81-.007-.808-.009-.807-.011-.809-.014-.806-.017-.805-.019-.807-.022-.804-.024-.804-.027-.804-.029-.802-.032-.801-.034-.802-.037-.801-.039-.798-.042-.8-.044-.798-.047-.797-.049-.798-.052-.796-.054-.795-.057-.796-.059-.793-.062-.792-.064-.794-.067-.792-.069-.791-.072-.79-.074-.79-.076-.788-.079-.788-.081-.787-.084-.787-.086-.786-.089-.785-.091-.784-.093-.784-.096-.783-.098-.781-.101-.782-.103-.781-.105-.778-.108-.779-.111-.779-.112-.777-.115-.776-.118-.776-.12-.775-.122-.774-.124-.772-.127-.773-.129-.772-.132-.77-.134-.771-.136-.769-.139-.768-.141-.768-.143-.766-.146-.765-.148-.765-.15-.765-.153-.763-.155-.763-.157-.761-.159-.761-.162-.76-.164-.758-.167-.758-.169-.759-.171-.755-.173-.756-.176-.754-.177-.754-.181-.753-.182-.751-.185-.752-.187-.75-.189-.749-.192-.749-.193-.747-.196-.747-.198-.745-.201-.745-.203-.744-.205-.743-.207-.742-.209-.74-.212-.741-.214-.739-.216-.737-.218-.738-.221-.737-.222-.735-.225-.734-.227-.733-.23-.733-.231-.732-.234-.73-.235-.73-.238-.728-.241-.729-.242-.726-.244-.725-.247-.725-.249-.724-.251-.723-.253-.721-.255-.721-.258-.719-.26-.719-.261-.718-.264-.717-.266-.715-.268-.714-.271-.715-.272-.712-.274-.712-.277-.71-.278-.708-.281-.71-.283-.707-.285-.706-.288-.706-.289-.703-.291-.703-.293-.702-.296-.702-.297-.7-.299-.698-.302-.697-.304-.697-.306-.696-.308-.695-.309-.693-.312-.691-.314-.691-.316-.691-.318-.689-.32-.687-.322-.687-.325-.686-.325-.683-.329-.684-.33-.683-.332-.681-.334-.679-.336-.679-.339-.678-.339-.675-.343-.676-.344-.675-.346-.672-.348-.672-.351-.67-.352-.67-.354-.668-.356-.667-.357-.665-.36-.665-.363-.665-.363-.661-.366-.661-.368-.66-.37-.659-.371-.657-.373-.656-.377-.656-.377-.653-.378-.652-.382-.652-.383-.65-.385-.648-.387-.648-.389-.646-.391-.644-.392-.644-.395-.644-.397-.641-.398-.639-.4-.639-.402-.637-.404-.636-.406-.636-.408-.633-.409-.632-.411-.63-.414-.631-.415-.628-.416-.627-.419-.625-.421-.625-.422-.623-.424-.622-.427-.62-.428-.619-.429-.617-.432-.617-.433-.616-.436-.613-.436-.612-.438-.61-.442-.611-.442-.608-.444-.607-.445-.605-.449-.604-.449-.603-.451-.601-.453-.6-.455-.599-.457-.597-.458-.595-.46-.595-.461-.593-.464-.591-.465-.59-.467-.589-.469-.588-.47-.585-.473-.585-.473-.582-.476-.582-.477-.579-.479-.579-.481-.578-.482-.575-.485-.574-.485-.573-.488-.571-.489-.57-.491-.568-.492-.567-.494-.565-.497-.564-.497-.563-.499-.56-.501-.56-.503-.558-.504-.556-.506-.555-.507-.553-.509-.552-.511-.55-.512-.548-.514-.548-.516-.546-.517-.543-.518-.543-.521-.541-.522-.539-.524-.538-.525-.536-.527-.535-.528-.533-.53-.532-.532-.53-.533-.528-.535-.527-.536-.525-.538-.524-.539-.522-.541-.52-.543-.519-.544-.517-.545-.516-.548-.514-.548-.512-.55-.511-.552-.509-.553-.507-.555-.506-.556-.504-.558-.503-.56-.501-.56-.499-.563-.498-.564-.495-.565-.494-.567-.493-.568-.491-.57-.489-.571-.488-.573-.486-.574-.484-.575-.482-.578-.481-.578-.479-.58-.477-.582-.476-.583-.473-.584-.473-.586-.47-.587-.469-.589-.467-.59-.465-.591-.464-.593-.461-.594-.46-.596-.459-.597-.456-.599-.455-.6-.453-.601-.451-.603-.45-.604-.447-.605-.446-.607-.444-.609-.443-.609-.44-.611-.439-.612-.437-.614-.435-.615-.433-.616-.432-.618-.429-.619-.428-.621-.427-.621-.424-.623-.422-.625-.421-.625-.419-.627-.416-.628-.415-.63-.414-.631-.411-.632-.41-.634-.407-.634-.406-.637-.404-.637-.402-.639-.4-.64-.399-.641-.396-.642-.394-.644-.393-.645-.391-.646-.389-.648-.387-.649-.385-.65-.383-.651-.381-.652-.379-.654-.378-.655-.375-.656-.374-.658-.371-.658-.37-.66-.368-.661-.366-.662-.363-.664-.362-.664-.36-.666-.358-.667-.356-.668-.354-.67-.352-.67-.351-.672-.348-.673-.346-.674-.344-.675-.342-.677-.34-.677-.339-.679-.336-.68-.334-.681-.332-.682-.33-.683-.328-.684-.327-.686-.324-.687-.322-.687-.32-.689-.318-.69-.316-.691-.314-.692-.312-.694-.31-.694-.307-.696-.306-.696-.304-.698-.301-.699-.3-.7-.297-.7-.296-.703-.293-.703-.292-.704-.289-.705-.287-.706-.285-.708-.283-.708-.28-.709-.279-.711-.277-.711-.274-.713-.273-.713-.27-.715-.268-.716-.266-.716-.264-.718-.261-.718-.26-.72-.257-.721-.256-.722-.253-.722-.251-.724-.249-.725-.246-.725-.245-.727-.242-.728-.241-.728-.238-.73-.235-.73-.234-.732-.232-.732-.229-.734-.227-.734-.225-.735-.222-.737-.221-.737-.218-.738-.216-.739-.214-.74-.212-.741-.209-.742-.207-.743-.205-.744-.203-.745-.201-.745-.198-.747-.196-.747-.193-.749-.192-.749-.189-.75-.187-.751-.185-.752-.182-.753-.18-.754-.178-.754-.176-.756-.173-.756-.171-.757-.169-.758-.167-.759-.164-.76-.162-.761-.159-.762-.157-.762-.155-.763-.153-.764-.15-.765-.148-.766-.146-.767-.143-.767-.141-.768-.139-.77-.136-.769-.134-.771-.132-.772-.129-.772-.127-.773-.124-.774-.122-.775-.12-.776-.118-.776-.115-.778-.112-.778-.111-.778-.107-.78-.106-.78-.103-.781-.101-.782-.098-.783-.096-.784-.093-.784-.091-.785-.089-.786-.086-.786-.084-.788-.081-.788-.079-.789-.076-.789-.074-.79-.072-.791-.069-.792-.067-.793-.064-.793-.062-.794-.059-.795-.057-.795-.054-.796-.052-.797-.049-.798-.047-.798-.044-.799-.042-.8-.039-.8-.037-.802-.034-.801-.032-.803-.029-.803-.027-.804-.024-.805-.022-.805-.019-.806-.017-.807-.014-.807-.011-.808-.009-.809-.007-.809-.004L300 50l-.81.001z"/>
      <path d="M300 201l35.5 99.5h-71L300 201z"/>
      <path fill="#fff" d="M300 400l-35.5-99.5h71L300 400z"/>
      <path d="M300 400l-35.5-99.5h71L300 400zm-21.315-89.5L300 370.241l21.315-59.741h-42.63z"/>
      <text
        x="242.27"
        y="190.051"
        fontFamily="'Muli-Regular', 'Muli'"
        fontSize="154.566"
      >
        N
      </text>
    </svg>
  );
}

export default Compass;
