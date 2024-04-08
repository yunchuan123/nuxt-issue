import {computed} from "vue";
import { concat } from "lodash-es";

export const HOVER_EFFECT = {
    NONE: "none",
    SCALE: "scale-105",
    TRANSLATE_Y: "-translate-y-2",
    BOEDER_BOTTOM_RED: "border-b-red-500"
}

/**
 * 组合animate class
 * @param setting
 * @param _containerClass
 * @returns {{containerClass: ComputedRef<string[]|*[]>}}
 */
export function concatAnimateClass(setting, _containerClass) {
    const containerClass = computed(() => {
        const containerClass = [..._containerClass];
        const animateCls = ["animate__animated", `animate__${setting.animate}`];
        if (setting.hoverEffect && setting.hoverEffect !== HOVER_EFFECT.NONE) {
            containerClass.push(addHoverPrefix(setting.hoverEffect))
        }
        const cls = concat(["animate__animated", animateCls], containerClass);
        return setting.animate ? cls : [containerClass];
    })
    return {
        containerClass
    }
}

export function concatChildAnimateClass(setting, childClass) {
    const childContainerClass = computed(() => {
        const containerClass = [...childClass];
        if (setting.childHoverEffect && setting.childHoverEffect !== HOVER_EFFECT.NONE) {
            containerClass.push("cursor-pointer")
            containerClass.push(addHoverPrefix(setting.childHoverEffect))
        }
        return containerClass;
    })
    return {
        childContainerClass
    }
}

export function addHoverPrefix(str) {
    if (str === HOVER_EFFECT.BOEDER_BOTTOM_RED) {
        return `border-b-4 border-b-transparent transition-border duration-500 ease-in-out hover:${str}`
    }
    return `hover:${str}`;
}
