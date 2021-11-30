// 初始化表单数据
export function initListenerForm(listener) {
  let self = {
    ...listener
  };
  if (listener.script) {
    self = {
      ...listener,
      ...listener.script,
      scriptType: listener.script.resource ? "externalScript" : "inlineScript"
    };
  }
  if (listener.event === "timeout" && listener.eventDefinitions) {
    if (listener.eventDefinitions.length) {
      let k = "";
      for (let key in listener.eventDefinitions[0]) {
        console.log(listener.eventDefinitions, key);
        if (key.indexOf("time") !== -1) {
          k = key;
          self.eventDefinitionType = key.replace("time", "").toLowerCase();
        }
      }
      console.log(k);
      self.eventTimeDefinitions = listener.eventDefinitions[0][k].body;
    }
  }
  return self;
}

export function initListenerType(listener) {
  let listenerType;
  if (listener.class) listenerType = "classListener";
  if (listener.expression) listenerType = "expressionListener";
  if (listener.delegateExpression) listenerType = "delegateExpressionListener";
  if (listener.script) listenerType = "scriptListener";
  return {
    ...JSON.parse(JSON.stringify(listener)),
    ...(listener.script ?? {}),
    listenerType: listenerType
  };
}

export const listenerType = {
  classListener: "Java 类",
  expressionListener: "表达式",
  delegateExpressionListener: "代理表达式",
  scriptListener: "脚本"
};

export const eventType = {
  create: "创建",
  assignment: "指派",
  complete: "完成",
  delete: "删除",
  update: "更新",
  timeout: "超时"
};

export const flowablelistenerType = {
  classListener: "Java 类",
  delegateExpressionListener: "代理表达式"
};

export const flowableEventType = {
  ACTIVITY_CANCELLED: "ACTIVITY_CANCELLED",
  ACTIVITY_COMPENSATE: "ACTIVITY_COMPENSATE",
  ACTIVITY_COMPLETED: "ACTIVITY_COMPLETED",
  ACTIVITY_ERROR_RECEIVED: "ACTIVITY_ERROR_RECEIVED",
  ACTIVITY_MESSAGE_CANCELLED: "ACTIVITY_MESSAGE_CANCELLED",
  ACTIVITY_MESSAGE_RECEIVED: "ACTIVITY_MESSAGE_RECEIVED",
  ACTIVITY_MESSAGE_WAITING: "ACTIVITY_MESSAGE_WAITING",
  ACTIVITY_SIGNALED: "ACTIVITY_SIGNALED",
  ACTIVITY_SIGNAL_WAITING: "ACTIVITY_SIGNAL_WAITING",
  ACTIVITY_STARTED: "ACTIVITY_STARTED",
  CUSTOM: "CUSTOM",
  ENGINE_CLOSED: "ENGINE_CLOSED",
  ENGINE_CREATED: "ENGINE_CREATED",
  ENTITY_ACTIVATED: "ENTITY_ACTIVATED",
  ENTITY_CREATED: "ENTITY_CREATED",
  ENTITY_DELETED: "ENTITY_DELETED",
  ENTITY_INITIALIZED: "ENTITY_INITIALIZED",
  ENTITY_SUSPENDED: "ENTITY_SUSPENDED",
  ENTITY_UPDATED: "ENTITY_UPDATED",
  HISTORIC_ACTIVITY_INSTANCE_CREATED: "HISTORIC_ACTIVITY_INSTANCE_CREATED",
  HISTORIC_ACTIVITY_INSTANCE_ENDED: "HISTORIC_ACTIVITY_INSTANCE_ENDED",
  HISTORIC_PROCESS_INSTANCE_CREATED: "HISTORIC_PROCESS_INSTANCE_CREATED",
  HISTORIC_PROCESS_INSTANCE_ENDED: "HISTORIC_PROCESS_INSTANCE_ENDED",
  JOB_CANCELED: "JOB_CANCELED",
  JOB_EXECUTION_FAILURE: "JOB_EXECUTION_FAILURE",
  JOB_EXECUTION_SUCCESS: "JOB_EXECUTION_SUCCESS",
  JOB_RESCHEDULED: "JOB_RESCHEDULED",
  JOB_RETRIES_DECREMENTED: "JOB_RETRIES_DECREMENTED",
  MEMBERSHIP_CREATED: "MEMBERSHIP_CREATED",
  MEMBERSHIP_DELETED: "MEMBERSHIP_DELETED",
  MEMBERSHIPS_DELETED: "MEMBERSHIPS_DELETED",
  MULTI_INSTANCE_ACTIVITY_CANCELLED: "MULTI_INSTANCE_ACTIVITY_CANCELLED",
  MULTI_INSTANCE_ACTIVITY_COMPLETED: "MULTI_INSTANCE_ACTIVITY_COMPLETED",
  MULTI_INSTANCE_ACTIVITY_COMPLETED_WITH_CONDITION: "MULTI_INSTANCE_ACTIVITY_COMPLETED_WITH_CONDITION",
  MULTI_INSTANCE_ACTIVITY_STARTED: "MULTI_INSTANCE_ACTIVITY_STARTED",
  PROCESS_CANCELLED: "PROCESS_CANCELLED",
  PROCESS_COMPLETED: "PROCESS_COMPLETED",
  PROCESS_COMPLETED_WITH_TERMINATE_END_EVENT: "PROCESS_COMPLETED_WITH_TERMINATE_END_EVENT",
  PROCESS_COMPLETED_WITH_ERROR_END_EVENT: "PROCESS_COMPLETED_WITH_ERROR_END_EVENT",
  PROCESS_CREATED: "PROCESS_CREATED",
  PROCESS_STARTED: "PROCESS_STARTED",
  SEQUENCEFLOW_TAKEN: "SEQUENCEFLOW_TAKEN",
  TASK_ASSIGNED: "TASK_ASSIGNED",
  TASK_COMPLETED: "TASK_COMPLETED",
  TASK_CREATED: "TASK_CREATED",
  TIMER_FIRED: "TIMER_FIRED",
  TIMER_SCHEDULED: "TIMER_SCHEDULED",
  UNCAUGHT_BPMN_ERROR: "UNCAUGHT_BPMN_ERROR",
  VARIABLE_CREATED: "VARIABLE_CREATED",
  VARIABLE_DELETED: "VARIABLE_DELETED",
  VARIABLE_UPDATED: "VARIABLE_UPDATED"
};

export const fieldType = {
  string: "字符串",
  expression: "表达式"
};
