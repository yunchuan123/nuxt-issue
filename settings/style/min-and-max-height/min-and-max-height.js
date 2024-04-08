
export function getMinAndMaxHeightStyle(setting) {
    const { minHeight, maxHeight } = setting;
    return {
        minHeight: `${minHeight}vh`,
        maxHeight: `${maxHeight}vh`
    }
}
