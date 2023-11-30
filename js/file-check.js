import { WebR } from 'https://webr.r-wasm.org/latest/webr.mjs';
const uploadInput = document.getElementById("uploadInput");

console.log("ciao")

async function analyze_file() {
  // const reader = new FileReader();
  // const webR = new WebR.shelter();
  // await webR.init();
  //let rOut = await webR.captureR('read_input()')
  const webR = new WebR();
  await webR.init();
  let scri = await fetch('test.R');
  let shelter = await new webR.Shelter();
  await shelter.evalR(await scri.text());


  const file = await uploadInput.files[0]
  const text = await file.text();
  await webR.FS.mkdir("/data")
  const buf = await file.arrayBuffer()
  const uint8View = new Uint8Array(buf);
  webR.FS.writeFile("/data/myfile.csv", uint8View)
  //writeFile('data', file)
  //const buf = new ArrayBuffer(text)


  let rOut = await shelter.evalR('read_input(vr = a)', {
    env: { a: 2 }
  });

  console.log(
    {
      file: file,
      //fileURL: fileURL,
      webR: webR,
      webRFS: webR.FS.writeFile,
      text: text,
      rOut: await rOut.toJs(),
      buf: buf.isView
    }
  )

  shelter.purge();
}

uploadInput.addEventListener("change", analyze_file, false)

// uploadInput.addEventListener(
//   "change",
//   () => {
//     // Calculate total size
//     console.log("file changed")
//     let numberOfBytes = 0;
//     for (const file of uploadInput.files) {
//       numberOfBytes += file.size;
//     }
// 
//     // Approximate to the closest prefixed unit
//     const units = [
//       "B",
//       "KiB",
//       "MiB",
//       "GiB",
//       "TiB",
//       "PiB",
//       "EiB",
//       "ZiB",
//       "YiB",
//     ];
//     const exponent = Math.min(
//       Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
//       units.length - 1,
//     );
//     const approx = numberOfBytes / 1024 ** exponent;
//     const output =
//       exponent === 0
//         ? `${numberOfBytes} bytes`
//         : `${approx.toFixed(3)} ${units[exponent]
//         } (${numberOfBytes} bytes)`;
// 
//     document.getElementById("fileNum").textContent =
//       uploadInput.files.length;
//     document.getElementById("fileSize").textContent = output;
//   },
//   false,
// );