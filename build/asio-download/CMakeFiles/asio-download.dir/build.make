# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.21

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\CMake\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\CMake\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\marti\projetos\GAMSo_Bot\build\asio-download

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\marti\projetos\GAMSo_Bot\build\asio-download

# Utility rule file for asio-download.

# Include any custom commands dependencies for this target.
include CMakeFiles/asio-download.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/asio-download.dir/progress.make

CMakeFiles/asio-download: CMakeFiles/asio-download-complete

CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-install
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-mkdir
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-download
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-patch
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-configure
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-build
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-install
CMakeFiles/asio-download-complete: asio-download-prefix/src/asio-download-stamp/asio-download-test
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Completed 'asio-download'"
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/CMakeFiles
	"C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/CMakeFiles/asio-download-complete
	"C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-done

asio-download-prefix/src/asio-download-stamp/asio-download-build: asio-download-prefix/src/asio-download-stamp/asio-download-configure
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "No build step for 'asio-download'"
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E echo_append
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-build

asio-download-prefix/src/asio-download-stamp/asio-download-configure: asio-download-prefix/tmp/asio-download-cfgcmd.txt
asio-download-prefix/src/asio-download-stamp/asio-download-configure: asio-download-prefix/src/asio-download-stamp/asio-download-patch
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "No configure step for 'asio-download'"
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E echo_append
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-configure

asio-download-prefix/src/asio-download-stamp/asio-download-download: asio-download-prefix/src/asio-download-stamp/asio-download-gitinfo.txt
asio-download-prefix/src/asio-download-stamp/asio-download-download: asio-download-prefix/src/asio-download-stamp/asio-download-mkdir
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Performing download step (git clone) for 'asio-download'"
	cd /d C:\Users\marti\projetos\GAMSo_Bot\deps\sleepy-discord\deps && "C:\Program Files\CMake\bin\cmake.exe" -P C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/tmp/asio-download-gitclone.cmake
	cd /d C:\Users\marti\projetos\GAMSo_Bot\deps\sleepy-discord\deps && "C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-download

asio-download-prefix/src/asio-download-stamp/asio-download-install: asio-download-prefix/src/asio-download-stamp/asio-download-build
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "No install step for 'asio-download'"
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E echo_append
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-install

asio-download-prefix/src/asio-download-stamp/asio-download-mkdir:
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Creating directories for 'asio-download'"
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/deps/sleepy-discord/deps/asio
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-build
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/tmp
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src
	"C:\Program Files\CMake\bin\cmake.exe" -E make_directory C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp
	"C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-mkdir

asio-download-prefix/src/asio-download-stamp/asio-download-patch: asio-download-prefix/src/asio-download-stamp/asio-download-download
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "No patch step for 'asio-download'"
	"C:\Program Files\CMake\bin\cmake.exe" -E echo_append
	"C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-patch

asio-download-prefix/src/asio-download-stamp/asio-download-test: asio-download-prefix/src/asio-download-stamp/asio-download-install
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "No test step for 'asio-download'"
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E echo_append
	cd /d C:\Users\marti\projetos\GAMSo_Bot\build\asio-build && "C:\Program Files\CMake\bin\cmake.exe" -E touch C:/Users/marti/projetos/GAMSo_Bot/build/asio-download/asio-download-prefix/src/asio-download-stamp/asio-download-test

asio-download: CMakeFiles/asio-download
asio-download: CMakeFiles/asio-download-complete
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-build
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-configure
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-download
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-install
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-mkdir
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-patch
asio-download: asio-download-prefix/src/asio-download-stamp/asio-download-test
asio-download: CMakeFiles/asio-download.dir/build.make
.PHONY : asio-download

# Rule to build all files generated by this target.
CMakeFiles/asio-download.dir/build: asio-download
.PHONY : CMakeFiles/asio-download.dir/build

CMakeFiles/asio-download.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\asio-download.dir\cmake_clean.cmake
.PHONY : CMakeFiles/asio-download.dir/clean

CMakeFiles/asio-download.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\marti\projetos\GAMSo_Bot\build\asio-download C:\Users\marti\projetos\GAMSo_Bot\build\asio-download C:\Users\marti\projetos\GAMSo_Bot\build\asio-download C:\Users\marti\projetos\GAMSo_Bot\build\asio-download C:\Users\marti\projetos\GAMSo_Bot\build\asio-download\CMakeFiles\asio-download.dir\DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/asio-download.dir/depend
