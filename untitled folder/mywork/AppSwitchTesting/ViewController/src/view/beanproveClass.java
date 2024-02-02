package view;

import java.io.Serializable;

import oracle.adf.controller.TaskFlowId;

public class beanproveClass
  implements Serializable
{
  private String taskFlowId = "/WEB-INF/task-flow-1.xml#task-flow-1";

  public beanproveClass()
  {
  }

  public TaskFlowId getDynamicTaskFlowId()
  {
    return TaskFlowId.parse(taskFlowId);
  }

  public void setDynamicTaskFlowId(String taskFlowId)
  {
    this.taskFlowId = taskFlowId;
  }

  public String taskflow1()
  {
    setDynamicTaskFlowId("/WEB-INF/task-flow-1.xml#task-flow-1");
    return null;
  }

  public String taskflow2()
  {
    setDynamicTaskFlowId("/WEB-INF/task-flow-2.xml#task-flow-2");
    return null;
  }
}
