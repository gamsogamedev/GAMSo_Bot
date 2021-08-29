#CMakeLists.txt
cmake_minimum_required (VERSION 3.6)
project(GAMSo)

add_executable(GAMSo_bot exemplo_sleepy.cpp)

add_subdirectory(deps/sleepy-discord)
target_link_libraries(GAMSo_bot sleepy-discord)