<p style="font-size:30px; font-weight:bolder; text-align:center ">实验八 深度学习与视觉导航</p>

## **【实验目标】**
* 了解Action通信
* 写一个简单的C++程序，控制小车自主导航到目标点
* 通过ROSECHO触发控制小车运动

## **【实验内容】**
### **Action通信**
机器人导航到某个目标点,此过程需要一个节点A发布目标信息，然后一个节点B接收到请求并控制移动，最终响应目标达成状态信息。不同于服务通信，在导航过程中，Action 通信服务端可以连续反馈当前机器人状态信息，客户端可以接收连续反馈并且还可以取消任务。当导航终止时，再返回最终的执行结果。
**客户端服务端交互图解：**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119410.webp)
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119106.webp)
详细讲解参考ROS官网：http://wiki.ros.org/actionlib
为了便于理解，接下来我们写一个简单的程序，用ROS中提供的actionlib功能包集来实现Action通信。

### **写一个C++程序，通过订阅move_base服务器，控制小车导航到目标点**
我们用VS Code来写程序
1、在tianbot_bringup功能包下新建文件夹src，用来存放C++文件，新建`simple_goals.cpp`文件，将下列源码复制粘贴进去，最好自己敲一遍。

```cpp
#include  <ros/ros.h>
#include  <move_base_msgs/MoveBaseAction.h>
#include  <actionlib/client/simple_action_client.h>

typedef  actionlib::SimpleActionClient<move_base_msgs::MoveBaseAction\>MoveBaseClient;

int  main(int  argc, char**  argv)
{
    ros::init(argc, argv, "simple_goals");

    //tell the action client that we want to spin a thread by default
    MoveBaseClient  ac("move_base", true);

    //wait for the action server to come up
    while(!ac.waitForServer(ros::Duration(5.0)))
    {
    ROS_INFO("Waiting for the move_base action server to come up");
    }

    move_base_msgs::MoveBaseGoal  goal;

    //we'll send a goal to the robot to move 1 meter forward
    goal.target_pose.header.frame_id  =  "odom";
    goal.target_pose.header.stamp  =  ros::Time::now();
    goal.target_pose.pose.position.x = 1.0;
    goal.target_pose.pose.orientation.w = 1.0;

    ROS_INFO("Sending goal");
    ac.sendGoal(goal);
    ac.waitForResult();

    if(ac.getState() ==  actionlib::SimpleClientGoalState::SUCCEEDED)
        ROS_INFO("Hooray, the base moved 1 meter forward");
    else
        ROS_INFO("The base failed to move forward 1 meter for some reason");

    return  0;
}
```

2、修改当前功能包下的CMakeList文件，添加以下文件来为程序编译生成可执行文件
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119405.webp)
添加actionlib依赖
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119122.webp)
3、catkin_make编译，source devel/setup.bash，启动自主导航步骤后，运行该程序：``rosrun tianbot_bringup simple_goals``
在rviz中观察或观察小车，发现小车向前行进了1米！

### **ROSECHO触发控制小车**
参考ROSECHO功能包的demo.py脚本文件，学习用语音控制小车