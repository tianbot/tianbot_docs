# 从 Isaac Lab 1.4.0 到 Isaac Lab 2.0.0 的 API 变化和迁移指南

- [Isaac Lab 官方版本迁移指南](https://isaac-sim.github.io/IsaacLab/main/source/refs/migration.html)

根据官方模板`IsaacLabExtensionTemplate`的更新日志，以及`IsaacLabExtensionTemplate`的[源码]()，可以发现在提交[(#46)](https://github.com/isaac-sim/IsaacLabExtensionTemplate/commit/14cd53e562f549b6a37780c75394d030e5ff5e06) 中，可以看到从 Isaac Lab 1.4.0 到 Isaac Lab 2.0 相应配置项和 API 接口 变更过程：

- [Updates Extension Template for Isaac Lab 2.0 (#46)](https://github.com/isaac-sim/IsaacLabExtensionTemplate/commit/14cd53e562f549b6a37780c75394d030e5ff5e06) 

> Note that Isaac Lab 2.0 contained breaking changes in refactoring and
restructuring the folders in Isaac Lab. To accommodate for the changes,
we have made the following changes:

- Renamed `exts` folder to `source`
- Renamed `omni.isaac.lab*` imports to `isaaclab*`

## ext to source

::: info 提示
- A 添加（add）
- M 修改（modify）
- D 删除（delete）
- Rxxx 重命名（rename）
:::

**IsaacLabExtensionTemplate**
```bash
:100644 100644 ad033da f0170f9 M        .vscode/tools/setup_vscode.py
:100644 100644 3c79446 5052cad M        README.md
:100644 100644 8313a8f 1785c44 M        docker/Dockerfile
:100644 100644 623b09a 8905644 M        pyproject.toml
:100644 100644 bb0d225 02b0c97 M        scripts/list_envs.py
:100644 100644 62323a7 2436a5c M        scripts/rename_template.py
:100644 100644 db5e2ec b5f0b10 M        scripts/rsl_rl/cli_args.py
:100644 100644 c8d78ef e381348 M        scripts/rsl_rl/play.py
:100644 100644 cd40a22 3df343d M        scripts/rsl_rl/train.py
:100644 100644 47287b4 a5e2071 R089     exts/ext_template/config/extension.toml source/ext_template/config/extension.toml
:100644 100644 0a5dd3a 0a5dd3a R100     exts/ext_template/docs/CHANGELOG.rst    source/ext_template/docs/CHANGELOG.rst
:100644 100644 4f1d8e9 4f1d8e9 R100     exts/ext_template/ext_template/__init__.py      source/ext_template/ext_template/__init__.py
:100644 100644 9a0354d 34f2657 R085     exts/ext_template/ext_template/tasks/__init__.py        source/ext_template/ext_template/tasks/__init__.py
:100644 100644 ee02789 ee02789 R100     exts/ext_template/ext_template/tasks/locomotion/__init__.py     source/ext_template/ext_template/tasks/locomotion/__init__.py
:100644 100644 a8dd40a a8dd40a R100     exts/ext_template/ext_template/tasks/locomotion/velocity/__init__.py    source/ext_template/ext_template/tasks/locomotion/velocity/__init__.py
:100644 100644 c751916 c751916 R100     exts/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py     source/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py
:100644 100644 ae9e1b4 2d40155 R084     exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py    source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py
:100644 100644 e69de29 e69de29 R100     exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py     source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py
:100644 100644 401bba5 598a0f5 R085     exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py       source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py
:100644 100644 e262f50 307f127 R096     exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py        source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py
:100644 100644 7d711fa 289b07f R092     exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py       source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py
:100644 100644 e1d01e9 d00e381 R076     exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py        source/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py
:100644 100644 8411e60 c72eabd R082     exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py     source/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py
:100644 100644 67dd6d1 658a489 R093     exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py source/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py
:100644 100644 530aa0f 27a3ea7 R090     exts/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py    source/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py
:100644 100644 e2c7051 e2c7051 R100     exts/ext_template/ext_template/ui_extension_example.py  source/ext_template/ext_template/ui_extension_example.py
:100644 100644 2e4681d 2e4681d R100     exts/ext_template/setup.py      source/ext_template/setup.py
```

与`IsaacLabExtensionTemplate`的更新日志中提到的`exts`文件夹重命名为`source`相对应，剩下的 M 标签则对应了 API 的变化。

## omni.isaac.lab* to isaaclab*

注意对应文件名称
## other config and docs

文档、项目配置等文件

### .vscode
```diff 
--git a/.vscode/tools/setup_vscode.py b/.vscode/tools/setup_vscode.py
index ad033da..f0170f9 100644
+++ b/.vscode/tools/setup_vscode.py
@@ -111,8 +111,8 @@ def overwrite_python_analysis_extra_paths(isaaclab_settings: str) -> str:
         )
 
     # add the path names that are in the Isaac Lab extensions directory
-    isaaclab_extensions = os.listdir(os.path.join(PROJECT_DIR, "exts"))
-    path_names.extend(['"${workspaceFolder}/exts/' + ext + '"' for ext in isaaclab_extensions])
+    isaaclab_extensions = os.listdir(os.path.join(PROJECT_DIR, "source"))
+    path_names.extend(['"${workspaceFolder}/source/' + ext + '"' for ext in isaaclab_extensions])
 
     # combine them into a single string
     path_names = ",\n\t\t".expandtabs(4).join(path_names)
```

### README.md

```diff 
--git a/README.md b/README.md
index 3c79446..5052cad 100644
@@ -177,7 +177,7 @@ In some VsCode versions, the indexing of part of the extensions is missing. In t
 ```json
 {
     "python.analysis.extraPaths": [
-        "<path-to-ext-repo>/exts/ext_template"
+        "<path-to-ext-repo>/source/ext_template"
     ]
 }
```

### docker/Dockerfile

```diff 
--git a/docker/Dockerfile b/docker/Dockerfile
index 8313a8f..1785c44 100644
--- a/docker/Dockerfile
+++ b/docker/Dockerfile
@@ -13,7 +13,7 @@ COPY ../ ${DOCKER_ISAACLAB_EXTENSION_TEMPLATE_PATH}
 
 # # Install whatever you need as additional dependencies.
 RUN bash -i -c "source ${HOME}/.bashrc && \
-    cd ${DOCKER_ISAACLAB_EXTENSION_TEMPLATE_PATH}/exts/ext_template && \
+    cd ${DOCKER_ISAACLAB_EXTENSION_TEMPLATE_PATH}/source/ext_template && \
     pip install -e ."
 
 # make working directory as the Isaac Lab directory
```

### pyproject.toml

```diff --git a/pyproject.toml b/pyproject.toml
index 623b09a..8905644 100644
--- a/pyproject.toml
+++ b/pyproject.toml
@@ -39,8 +39,7 @@ extra_standard_library = [
     "psutil",
 ]
 known_thirdparty = [
-    "omni.isaac.core",
-    "omni.replicator.isaac",
+    "isaacsim.core.api",
     "omni.replicator.core",
     "pxr",
     "omni.kit.*",
@@ -49,9 +48,11 @@ known_thirdparty = [
     "Semantics",
 ]
 known_isaaclabparty = [
-    "omni.isaac.lab",
-    "omni.isaac.lab_tasks",
-    "omni.isaac.lab_assets"
+    "isaaclab",
+    "isaaclab_tasks",
+    "isaaclab_assets",
+    "isaaclab_mimic",
+    "isaaclab_rl"
 ]
 
 # Modify the following to include the package names of your first-party code
```

## scripts

关键的交互脚本代码

### scripts/list_envs.py

```diff 
--git a/scripts/list_envs.py b/scripts/list_envs.py
index bb0d225..02b0c97 100644
--- a/scripts/list_envs.py
+++ b/scripts/list_envs.py
@@ -7,7 +7,7 @@ It prints the name of the environment, the entry point and the config file.
 
 """Launch Isaac Sim Simulator first."""
 
-from omni.isaac.lab.app import AppLauncher
+from isaaclab.app import AppLauncher
 
 # launch omniverse app
 app_launcher = AppLauncher(headless=True)
```

### scripts/rename_template.py

```diff 
--git a/scripts/rename_template.py b/scripts/rename_template.py
index 62323a7..2436a5c 100644
--- a/scripts/rename_template.py
+++ b/scripts/rename_template.py
@@ -19,11 +19,17 @@ def rename_file_contents(root_dir_path: str, old_name: str, new_name: str, exclu
         if any(exclude_dir in dirpath for exclude_dir in exclude_dirs):
             continue
         for file_name in files:
-            with open(os.path.join(dirpath, file_name)) as file:
-                file_contents = file.read()
-            file_contents = file_contents.replace(old_name, new_name)
-            with open(os.path.join(dirpath, file_name), "w") as file:
-                file.write(file_contents)
+            if file_name == "rename_template.py":
+                continue
+            try:
+                with open(os.path.join(dirpath, file_name)) as file:
+                    file_contents = file.read()
+                file_contents = file_contents.replace(old_name, new_name)
+                with open(os.path.join(dirpath, file_name), "w") as file:
+                    file.write(file_contents)
+            except Exception as e:
+                print(f"Ignoring {file_name}: {e}")
+                continue
 
 
 if __name__ == "__main__":
@@ -41,11 +47,13 @@ if __name__ == "__main__":
     if proceed.lower() == "y":
         # rename the ext_template folder
         os.rename(
-            os.path.join(root_dir_path, "exts", "ext_template", "ext_template"),
-            os.path.join(root_dir_path, "exts", "ext_template", new_name),
+            os.path.join(root_dir_path, "source", "ext_template", "ext_template"),
+            os.path.join(root_dir_path, "source", "ext_template", new_name),
+        )
+        os.rename(
+            os.path.join(root_dir_path, "source", "ext_template"), os.path.join(root_dir_path, "source", new_name)
         )
-        os.rename(os.path.join(root_dir_path, "exts", "ext_template"), os.path.join(root_dir_path, "exts", new_name))
         # rename the file contents
-        rename_file_contents(root_dir_path, old_name, new_name, exclude_dirs=[".git"])
+        rename_file_contents(root_dir_path, old_name, new_name, exclude_dirs=[".git", "logs"])
     else:
         print("Aborting.")
```

### scripts/rsl_rl/cli_args.py

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
- 将接口`omni.isaac.lab_tasks.utils`换成`isaaclab_tasks.utils`
- 将接口`omni.isaac.lab_tasks.utils.wrappers.rsl_rl`换成`isaaclab_rl.rsl_rl`
:::

```diff 
--git a/scripts/rsl_rl/cli_args.py b/scripts/rsl_rl/cli_args.py
index db5e2ec..b5f0b10 100644
--- a/scripts/rsl_rl/cli_args.py
+++ b/scripts/rsl_rl/cli_args.py
@@ -4,7 +4,7 @@ import argparse
 from typing import TYPE_CHECKING
 
 if TYPE_CHECKING:
-    from omni.isaac.lab_tasks.utils.wrappers.rsl_rl import RslRlOnPolicyRunnerCfg
+    from isaaclab_rl.rsl_rl import RslRlOnPolicyRunnerCfg
 
 
 def add_rsl_rl_args(parser: argparse.ArgumentParser):
@@ -43,7 +43,7 @@ def parse_rsl_rl_cfg(task_name: str, args_cli: argparse.Namespace) -> RslRlOnPol
     Returns:
         The parsed configuration for RSL-RL agent based on inputs.
     """
-    from omni.isaac.lab_tasks.utils.parse_cfg import load_cfg_from_registry
+    from isaaclab_tasks.utils.parse_cfg import load_cfg_from_registry
 
     # load the default configuration
     rslrl_cfg: RslRlOnPolicyRunnerCfg = load_cfg_from_registry(task_name, "rsl_rl_cfg_entry_point")
```

### scripts/rsl_rl/play.py

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
- 将接口`omni.isaac.lab_tasks.utils`换成`isaaclab_tasks.utils`
- 将接口`omni.isaac.lab_tasks.utils.wrappers.rsl_rl`换成`isaaclab_rl.rsl_rl`
:::

```diff 
--git a/scripts/rsl_rl/play.py b/scripts/rsl_rl/play.py
index c8d78ef..e381348 100644
--- a/scripts/rsl_rl/play.py
+++ b/scripts/rsl_rl/play.py
@@ -4,7 +4,7 @@
 
 import argparse
 
-from omni.isaac.lab.app import AppLauncher
+from isaaclab.app import AppLauncher
 
 # local imports
 import cli_args  # isort: skip
@@ -39,15 +39,10 @@ import torch
 
 from rsl_rl.runners import OnPolicyRunner
 
-from omni.isaac.lab.envs import DirectMARLEnv, multi_agent_to_single_agent
-from omni.isaac.lab.utils.dict import print_dict
-from omni.isaac.lab_tasks.utils import get_checkpoint_path, parse_env_cfg
-from omni.isaac.lab_tasks.utils.wrappers.rsl_rl import (
-    RslRlOnPolicyRunnerCfg,
-    RslRlVecEnvWrapper,
-    export_policy_as_jit,
-    export_policy_as_onnx,
-)
+from isaaclab.envs import DirectMARLEnv, multi_agent_to_single_agent
+from isaaclab.utils.dict import print_dict
+from isaaclab_rl.rsl_rl import RslRlOnPolicyRunnerCfg, RslRlVecEnvWrapper, export_policy_as_jit, export_policy_as_onnx
+from isaaclab_tasks.utils import get_checkpoint_path, parse_env_cfg
 
 # Import extensions to set up environment tasks
 import ext_template.tasks  # noqa: F401
```

### scripts/rsl_rl/train.py

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
- 将接口`omni.isaac.lab_tasks.utils`换成`isaaclab_tasks.utils`
- 将接口`omni.isaac.lab_tasks.utils.wrappers.rsl_rl`换成`isaaclab_rl.rsl_rl`
:::

```diff 
--git a/scripts/rsl_rl/train.py b/scripts/rsl_rl/train.py
index cd40a22..3df343d 100644
--- a/scripts/rsl_rl/train.py
+++ b/scripts/rsl_rl/train.py
@@ -10,7 +10,7 @@
 import argparse
 import sys
 
-from omni.isaac.lab.app import AppLauncher
+from isaaclab.app import AppLauncher
 
 # local imports
 import cli_args  # isort: skip
@@ -51,18 +51,18 @@ from datetime import datetime
 
 from rsl_rl.runners import OnPolicyRunner
 
-from omni.isaac.lab.envs import (
+from isaaclab.envs import (
     DirectMARLEnv,
     DirectMARLEnvCfg,
     DirectRLEnvCfg,
     ManagerBasedRLEnvCfg,
     multi_agent_to_single_agent,
 )
-from omni.isaac.lab.utils.dict import print_dict
-from omni.isaac.lab.utils.io import dump_pickle, dump_yaml
-from omni.isaac.lab_tasks.utils import get_checkpoint_path
-from omni.isaac.lab_tasks.utils.hydra import hydra_task_config
-from omni.isaac.lab_tasks.utils.wrappers.rsl_rl import RslRlOnPolicyRunnerCfg, RslRlVecEnvWrapper
+from isaaclab.utils.dict import print_dict
+from isaaclab.utils.io import dump_pickle, dump_yaml
+from isaaclab_rl.rsl_rl import RslRlOnPolicyRunnerCfg, RslRlVecEnvWrapper
+from isaaclab_tasks.utils import get_checkpoint_path
+from isaaclab_tasks.utils.hydra import hydra_task_config
 
 # Import extensions to set up environment tasks
 import ext_template.tasks  # noqa: F401
```

## rename exts/ to source/

Extension扩展代码

### source/ext_template/config

**source/ext_template/config/extension.toml**

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
- 将接口`omni.isaac.lab_tasks.utils`换成`isaaclab_tasks.utils`
:::

```diff 
--git a/exts/ext_template/config/extension.toml b/source/ext_template/config/extension.toml
similarity index 89%
rename from exts/ext_template/config/extension.toml
rename to source/ext_template/config/extension.toml
index 47287b4..a5e2071 100644
--- a/exts/ext_template/config/extension.toml
+++ b/source/ext_template/config/extension.toml
@@ -15,9 +15,11 @@ repository = "https://github.com/isaac-sim/IsaacLabExtensionTemplate.git"
 keywords = ["extension", "template", "isaaclab"]
 
 [dependencies]
-"omni.isaac.lab" = {}
-"omni.isaac.lab_assets" = {}
-"omni.isaac.lab_tasks" = {}
+"isaaclab" = {}
+"isaaclab_assets" = {}
+"isaclab_mimic" = {}
+"isaaclab_rl" = {}
+"isaaclab_tasks" = {}
 # NOTE: Add additional dependencies here
 
 [[python.module]]
```

### source/ext_template/docs
**source/ext_template/docs/CHANGELOG.rst**
```diff 
--git a/exts/ext_template/docs/CHANGELOG.rst b/source/ext_template/docs/CHANGELOG.rst
similarity index 100%
rename from exts/ext_template/docs/CHANGELOG.rst
rename to source/ext_template/docs/CHANGELOG.rst
diff --git a/exts/ext_template/ext_template/__init__.py b/source/ext_template/ext_template/__init__.py
similarity index 100%
rename from exts/ext_template/ext_template/__init__.py
rename to source/ext_template/ext_template/__init__.py
```

### source/ext_template/ext_template/tasks
**source/ext_template/ext_template/tasks/__init__.py**

```diff

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
- 将接口`omni.isaac.lab_tasks.utils`换成`isaaclab_tasks.utils`
:::

--git a/exts/ext_template/ext_template/tasks/__init__.py b/source/ext_template/ext_template/tasks/__init__.py
similarity index 85%
rename from exts/ext_template/ext_template/tasks/__init__.py
rename to source/ext_template/ext_template/tasks/__init__.py
index 9a0354d..34f2657 100644
--- a/exts/ext_template/ext_template/tasks/__init__.py
+++ b/source/ext_template/ext_template/tasks/__init__.py
@@ -3,7 +3,7 @@
 import os
 import toml
 
-from omni.isaac.lab_tasks.utils import import_packages
+from isaaclab_tasks.utils import import_packages
 
 ##
 # Register Gym environments.
```

**source/ext_template/ext_template/tasks/locomotion/__init__.py**
```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/__init__.py b/source/ext_template/ext_template/tasks/locomotion/__init__.py
similarity index 100%
rename from exts/ext_template/ext_template/tasks/locomotion/__init__.py
rename to source/ext_template/ext_template/tasks/locomotion/__init__.py
```

**source/ext_template/ext_template/tasks/locomotion/velocity/__init__.py**
```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/__init__.py b/source/ext_template/ext_template/tasks/locomotion/velocity/__init__.py
similarity index 100%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/__init__.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/__init__.py
```

**source/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py**
```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py b/source/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py
similarity index 100%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/config/__init__.py
```

**source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py**

```diff 

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py
similarity index 84%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py
index ae9e1b4..2d40155 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/__init__.py
@@ -8,7 +8,7 @@ from . import agents, flat_env_cfg, rough_env_cfg
 
 gym.register(
     id="Template-Isaac-Velocity-Flat-Anymal-D-v0",
-    entry_point="omni.isaac.lab.envs:ManagerBasedRLEnv",
+    entry_point="isaaclab.envs:ManagerBasedRLEnv",
     disable_env_checker=True,
     kwargs={
         "env_cfg_entry_point": flat_env_cfg.AnymalDFlatEnvCfg,
@@ -18,7 +18,7 @@ gym.register(
 
 gym.register(
     id="Template-Isaac-Velocity-Flat-Anymal-D-Play-v0",
-    entry_point="omni.isaac.lab.envs:ManagerBasedRLEnv",
+    entry_point="isaaclab.envs:ManagerBasedRLEnv",
     disable_env_checker=True,
     kwargs={
         "env_cfg_entry_point": flat_env_cfg.AnymalDFlatEnvCfg_PLAY,
@@ -28,7 +28,7 @@ gym.register(
 
 gym.register(
     id="Template-Isaac-Velocity-Rough-Anymal-D-v0",
-    entry_point="omni.isaac.lab.envs:ManagerBasedRLEnv",
+    entry_point="isaaclab.envs:ManagerBasedRLEnv",
     disable_env_checker=True,
     kwargs={
         "env_cfg_entry_point": rough_env_cfg.AnymalDRoughEnvCfg,
@@ -38,7 +38,7 @@ gym.register(
 
 gym.register(
     id="Template-Isaac-Velocity-Rough-Anymal-D-Play-v0",
-    entry_point="omni.isaac.lab.envs:ManagerBasedRLEnv",
+    entry_point="isaaclab.envs:ManagerBasedRLEnv",
     disable_env_checker=True,
     kwargs={
         "env_cfg_entry_point": rough_env_cfg.AnymalDRoughEnvCfg_PLAY,
```

**source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py**
```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py
similarity index 100%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/__init__.py
```

**source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py**

::: tip 省流
- 将接口`omni.isaac.lab.` 换成 `isaaclab.`
- 将接口`omni.isaac.lab_tasks.utils.wrappers.rsl_rl`换成`isaaclab_rl.rsl_rl`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py
similarity index 85%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py
index 401bba5..598a0f5 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/agents/rsl_rl_ppo_cfg.py
@@ -1,9 +1,5 @@
-from omni.isaac.lab.utils import configclass
-from omni.isaac.lab_tasks.utils.wrappers.rsl_rl import (
-    RslRlOnPolicyRunnerCfg,
-    RslRlPpoActorCriticCfg,
-    RslRlPpoAlgorithmCfg,
-)
+from isaaclab.utils import configclass
+from isaaclab_rl.rsl_rl import RslRlOnPolicyRunnerCfg, RslRlPpoActorCriticCfg, RslRlPpoAlgorithmCfg
 
 
 @configclass
```

**source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py**

::: tip 省流
将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py
similarity index 96%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py
index e262f50..307f127 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/flat_env_cfg.py
@@ -1,4 +1,4 @@
-from omni.isaac.lab.utils import configclass
+from isaaclab.utils import configclass
 
 from .rough_env_cfg import AnymalDRoughEnvCfg
```

**source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py**

::: tip 省流
将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py
similarity index 92%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py
index 7d711fa..289b07f 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/config/anymal_d/rough_env_cfg.py
@@ -1,11 +1,11 @@
-from omni.isaac.lab.utils import configclass
+from isaaclab.utils import configclass
 
 from ext_template.tasks.locomotion.velocity.velocity_env_cfg import LocomotionVelocityRoughEnvCfg
 
 ##
 # Pre-defined configs
 ##
-from omni.isaac.lab_assets.anymal import ANYMAL_D_CFG  # isort: skip
+from isaaclab_assets.robots.anymal import ANYMAL_D_CFG  # isort: skip
 
 
 @configclass
```
**source/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py**

::: tip 省流
将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py b/source/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py
similarity index 76%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py
index e1d01e9..d00e381 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/mdp/__init__.py
@@ -1,6 +1,6 @@
 """This sub-module contains the functions that are specific to the locomotion environments."""
 
-from omni.isaac.lab.envs.mdp import *  # noqa: F401, F403
+from isaaclab.envs.mdp import *  # noqa: F401, F403
 
 from .curriculums import *  # noqa: F401, F403
 from .rewards import *  # noqa: F401, F403
```

**source/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py**

::: tip 省流
将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py b/source/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py
similarity index 82%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py
index 8411e60..c72eabd 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/mdp/curriculums.py
@@ -1,6 +1,6 @@
 """Common functions that can be used to create curriculum for the learning environment.
 
-The functions can be passed to the :class:`omni.isaac.lab.managers.CurriculumTermCfg` object to enable
+The functions can be passed to the :class:`isaaclab.managers.CurriculumTermCfg` object to enable
 the curriculum introduced by the function.
 """
 
@@ -10,12 +10,12 @@ import torch
 from collections.abc import Sequence
 from typing import TYPE_CHECKING
 
-from omni.isaac.lab.assets import Articulation
-from omni.isaac.lab.managers import SceneEntityCfg
-from omni.isaac.lab.terrains import TerrainImporter
+from isaaclab.assets import Articulation
+from isaaclab.managers import SceneEntityCfg
+from isaaclab.terrains import TerrainImporter
 
 if TYPE_CHECKING:
-    from omni.isaac.lab.envs import RLTaskEnv
+    from isaaclab.envs import RLTaskEnv
 
 
 def terrain_levels_vel(
@@ -28,7 +28,7 @@ def terrain_levels_vel(
 
     .. note::
         It is only possible to use this term with the terrain type ``generator``. For further information
-        on different terrain types, check the :class:`omni.isaac.lab.terrains.TerrainImporter` class.
+        on different terrain types, check the :class:`isaaclab.terrains.TerrainImporter` class.
 
     Returns:
         The mean terrain level for the given environment ids.
```

**source/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py**

::: tip 省流
将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py b/source/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py
similarity index 93%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py
index 67dd6d1..658a489 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/mdp/rewards.py
@@ -3,11 +3,11 @@ from __future__ import annotations
 import torch
 from typing import TYPE_CHECKING
 
-from omni.isaac.lab.managers import SceneEntityCfg
-from omni.isaac.lab.sensors import ContactSensor
+from isaaclab.managers import SceneEntityCfg
+from isaaclab.sensors import ContactSensor
 
 if TYPE_CHECKING:
-    from omni.isaac.lab.envs import ManagerBasedRLEnv
+    from isaaclab.envs import ManagerBasedRLEnv
 
 
 def feet_air_time(
```

**source/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py**

::: tip 省流
将接口`omni.isaac.lab.` 换成 `isaaclab.`
:::

```diff 
--git a/exts/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py b/source/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py
similarity index 90%
rename from exts/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py
rename to source/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py
index 530aa0f..27a3ea7 100644
--- a/exts/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py
+++ b/source/ext_template/ext_template/tasks/locomotion/velocity/velocity_env_cfg.py
@@ -3,28 +3,28 @@ from __future__ import annotations
 import math
 from dataclasses import MISSING
 
-import omni.isaac.lab.sim as sim_utils
-from omni.isaac.lab.assets import ArticulationCfg, AssetBaseCfg
-from omni.isaac.lab.envs import ManagerBasedRLEnvCfg
-from omni.isaac.lab.managers import CurriculumTermCfg as CurrTerm
-from omni.isaac.lab.managers import EventTermCfg as EventTerm
-from omni.isaac.lab.managers import ObservationGroupCfg as ObsGroup
-from omni.isaac.lab.managers import ObservationTermCfg as ObsTerm
-from omni.isaac.lab.managers import RewardTermCfg as RewTerm
-from omni.isaac.lab.managers import SceneEntityCfg
-from omni.isaac.lab.managers import TerminationTermCfg as DoneTerm
-from omni.isaac.lab.scene import InteractiveSceneCfg
-from omni.isaac.lab.sensors import ContactSensorCfg, RayCasterCfg, patterns
-from omni.isaac.lab.terrains import TerrainImporterCfg
-from omni.isaac.lab.utils import configclass
-from omni.isaac.lab.utils.noise import AdditiveUniformNoiseCfg as Unoise
+import isaaclab.sim as sim_utils
+from isaaclab.assets import ArticulationCfg, AssetBaseCfg
+from isaaclab.envs import ManagerBasedRLEnvCfg
+from isaaclab.managers import CurriculumTermCfg as CurrTerm
+from isaaclab.managers import EventTermCfg as EventTerm
+from isaaclab.managers import ObservationGroupCfg as ObsGroup
+from isaaclab.managers import ObservationTermCfg as ObsTerm
+from isaaclab.managers import RewardTermCfg as RewTerm
+from isaaclab.managers import SceneEntityCfg
+from isaaclab.managers import TerminationTermCfg as DoneTerm
+from isaaclab.scene import InteractiveSceneCfg
+from isaaclab.sensors import ContactSensorCfg, RayCasterCfg, patterns
+from isaaclab.terrains import TerrainImporterCfg
+from isaaclab.utils import configclass
+from isaaclab.utils.noise import AdditiveUniformNoiseCfg as Unoise
 
 import ext_template.tasks.locomotion.velocity.mdp as mdp
 
 ##
 # Pre-defined configs
 ##
-from omni.isaac.lab.terrains.config.rough import ROUGH_TERRAINS_CFG  # isort: skip
+from isaaclab.terrains.config.rough import ROUGH_TERRAINS_CFG  # isort: skip
 
 
 ##
@@ -299,6 +299,7 @@ class LocomotionVelocityRoughEnvCfg(ManagerBasedRLEnvCfg):
         self.sim.render_interval = self.decimation
         self.sim.disable_contact_processing = True
         self.sim.physics_material = self.scene.terrain.physics_material
+        self.sim.physx.gpu_max_rigid_patch_count = 10 * 2**15
         # update sensor update periods
         # we tick all the sensors based on the smallest update period (physics update period)
         if self.scene.height_scanner is not None:
```
