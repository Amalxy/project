const model = handPoseDetection.SupportedModels.MediaPipeHands;
 async function main() {
    
    const detectorConfig = {
    runtime: 'tfjs',
    modelType: 'lite'
    

    };
    detector = await handPoseDetection.createDetector(model, detectorConfig);
    const estimationConfig = {flipHorizontal: false};
    
    const hands = await detector.estimateHands(img, estimationConfig);
    console.log(hands)
    console.log("scrip ended")
}
main();