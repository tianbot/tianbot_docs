# hector_quadrotor 仿真

`hector_quadrotor` 包含与四旋翼无人机系统建模、控制和仿真相关的软件包。

<p align="center">
    <img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docdron_photo.png" height="250"/> <img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docdron_photo_rviz.png" height="250"/>
</p>

## 源码地址

- https://github.com/RAFALAMAO/hector_quadrotor_noetic.git

## 安装

- https://github.com/koide3/gazebo_apriltag.git 



## 使用

执行`hector_quadrotor_gazebo`和`hector_quadrotor_demo`软件包中的启动文件，运行模拟（目前只有这两个软件包有效，但您也可以尝试其他软件包）：

运行下面的命令

* ```sh
  source ~/study_ws/devel/setup.bash
  ```

* 启动 Gazebo 仿真环境
  ```sh
  roslaunch hector_quadrotor_gazebo quadrotor_empty_world_origin.launch
  ```

* 在 Gazebo 仿真环境中添加一个飞机，并开启 rviz

  ```sh
  roslaunch hector_quadrotor_demo outdoor_flight_gazebo.launch
  ```

* 在 Gazebo 仿真环境中添加一个飞机，不 开启 rviz

  ```sh
  roslaunch hector_quadrotor_demo outdoor_flight_gazebo_no_rviz.launch
  ```

* 在 Gazebo 仿真环境中添加两个飞机

  ```sh
  roslaunch hector_quadrotor_demo two_drones_empty.launch
  ```

## 如何遥控飞机

* 通过 teleop_twist_keyboard 功能包，

  ```sh
  rosrun teleop_twist_keyboard teleop_twist_keyboard.py
  ```

## 使用 UI 控制飞机

  <br/>
  <img width="250" src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-DocUI.png"/>

### 查看 UI 源码

### 如何使用 UI 控制飞机

  * 运行单个飞机的控制 UI

    ```sh
    rosrun hector_ui ui_hector_quad.py
    ```

  * 如果选择启动了 `two_drones_empty.launch`.

    * 运行 leader 飞机的控制 UI:

      ```sh
      rosrun hector_ui ui_hector_quad_leader.py
      ```

    * 运行 follower 飞机的控制 UI:

      ```sh
      rosrun hector_ui ui_hector_quad_follower.py
      ```

::: warning 注意
`Land` and `Take Off`对`hector_quadrotor`并不有效 .
:::


## 测试视频

[视频](https://www.youtube.com/watch?v=-2IWfZjqoNc) 演示：

<p align="center">
    <img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docgif.GIF"/>
</p>