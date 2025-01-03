import { ELEMENT_TEXT } from "./constants";
import { scheduleRoot, useReducer, useState } from "./scheduler";
import { Update } from "./UpdateQueue";

/**
 * 创建虚拟Dom的方法
 * @param {*} type 元素类型 div span p
 * @param {*} config 配置对象  元素属性
 * @param  {...any} children 所有的儿子，这里会做成一个数组
 */
function createElement(type, config, ...children) {
  if (config) {
    delete config.__self;
    delete config.__source;
  }

  // 做了兼容处理，如果是文本类型，返回元素对象
  const newChildren = children.reduce((total, child) => {
    // child是一个React.createElement返回的React元素
    if (typeof child === "object") {
      if (child instanceof Array) {
        total.push(...child);
      } else {
        total.push(child);
      }
    }
    // child是字符串
    else {
      total.push({
        type: ELEMENT_TEXT,
        props: { text: child, children: [] },
      });
    }
    return total;
  }, []);

  return {
    type,
    props: {
      ...(config || {}), // 有可能为null
      children: newChildren,
    },
  };
}

class Component {
  constructor(props) {
    this.props = props;
  }

  setState(payload) {
    this.internalFiber.updateQueue.enqueueUpdate(new Update(payload));
    scheduleRoot();
  }
}
// 函数组件标识
Component.prototype.isReactComponent = true;

const React = {
  createElement,
  Component,
  useReducer,
  useState,
};

export default React;
