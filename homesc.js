const model = handPoseDetection.SupportedModels.MediaPipeHands;
 async function main() {
    
    const detectorConfig = {
    runtime: 'tfjs',
    modelType: 'full'
    };
    detector = await handPoseDetection.createDetector(model, detectorConfig);
    const estimationConfig = {flipHorizontal: false};
    img.crossOrgin='Anonymous';
    const hands = await detector.estimateHands(img, estimationConfig);
}
main();