# pip install squeeze
SQUEEZE=squeeze

.PHONY: all clean

all: foo.js foo.min.js

foo.js: foo.coffee
	coffee -c *.coffee

foo.min.js: foo.js
	$(SQUEEZE) closure --compilation_level ADVANCED_OPTIMIZATIONS --js foo.js --js_output_file foo.min.js

clean:
	@-rm -rf foo.js
