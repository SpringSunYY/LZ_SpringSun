#!/bin/sh

# 复制项目的文件到对应docker路径，便于一键生成镜像。
usage() {
	echo "Usage: sh copy.sh"
	exit 1
}


# copy sql
echo "begin copy sql "
cp ../sql/ry_20240629.sql ./mysql/db
cp ../sql/ry_config_20240914.sql ./mysql/db

# copy html
echo "begin copy html "
cp -r ../litchi-ui/dist/** ./nginx/html/dist


# copy jar
echo "begin copy litchi-gateway "
cp ../litchi-gateway/target/litchi-gateway.jar ./ruoyi/gateway/jar

echo "begin copy litchi-auth "
cp ../litchi-auth/target/litchi-auth.jar ./ruoyi/auth/jar

echo "begin copy litchi-visual "
cp ../litchi-visual/litchi-monitor/target/litchi-visual-monitor.jar  ./ruoyi/visual/monitor/jar

echo "begin copy litchi-modules-system "
cp ../litchi-modules/litchi-system/target/litchi-modules-system.jar ./ruoyi/modules/system/jar

echo "begin copy litchi-modules-file "
cp ../litchi-modules/litchi-file/target/litchi-modules-file.jar ./ruoyi/modules/file/jar

echo "begin copy litchi-modules-job "
cp ../litchi-modules/litchi-job/target/litchi-modules-job.jar ./ruoyi/modules/job/jar

echo "begin copy litchi-modules-gen "
cp ../litchi-modules/litchi-gen/target/litchi-modules-gen.jar ./ruoyi/modules/gen/jar

